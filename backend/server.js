import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';
// import episodeData from "./data/episodes.json";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/P3historia";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

// Playlist using User & Episode
const Playlist = mongoose.model('Playlist', {
  title: {
    type: String,
    maxlength: 100,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  episodes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Episode'
  }
})



// Start defining your routes here
// Episode using Review
const Episode = mongoose.model('Episode', {
  title: {
    type: String,
    required: true
  },
  released: {
    type: Number,
    required: true
  },
  century: {
    type: [Number]
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  region: {
    type: String
  },
  country: {
    type: String
  },
  sources: {
    type: String,
    required: true
  },
  expert: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Review'
  },
  tags: {
    type: [String]
  },
  weblink: {
    type: String
  },
  applink: {
    type: String
  },
  podcastlink: {
    type: String
  }
});

// const epsiodeData = fetch(https://p3historia.herokuapp.com/episodes)
// const importEpisodeData = () => {
//   episodeData.forEach(episode => {
//     new Episode(episode).save();
//   });
// };
// importEpisodeData()

app.get("/episodes", (req, res) => {
  // res.send("Find episodes");
  res.json(episodeData);
});

app.post("/episode", async (req, res) => {
  try {
    const { title, released, century, description, region, country, sources, expert, tags, image, weblink, applink, podcastlink } = req.body;
    const episode = new Episode({ title, released, century, description, region, country, sources, expert, tags, image, weblink, applink, podcastlink });
    await episode.save()
    res.status(201).json({id:episode._id})
    }catch(err){
      res.status(400).json({message:'Could not create episode ', errors: err.errors})
  }
});

app.get('/episodes/:_id', async(req, res) => {
  const {_id} = req.params;
  try {
    const episode = await Episode.findOne({'_id': _id})
    // If not json is in the response, you have to invoke a send function
    res.json(episode).status(201);
  } catch (err) {
    res.status(401).json({message: 'Episode not found', error:err})
  }
})

app.get('/century/:century', async(req, res) => {
  const {century} = req.params;
  try {
    const centuryEpisodes = await Episode.find({'century': century})
    // If not json is in the response, you have to invoke a send function
    res.json(centuryEpisodes).status(201);
  } catch (err) {
    res.status(401).json({message: 'Century not found', error:err})
  }
})

app.get('/rating/:rating', async(req, res) => {
  const {rating} = req.params;
  const ratedEpisodes = episodeData.filter((episode) => episode.rating === rating)
  // If not json is in the response, you have to invoke a send function
  res.json(ratedEpisodes).status(201);
})
// // Filter
// app.get("/episode/:id", (req, res) => {
//   const id = req.params._id
//   Episode.findOne({'_id:': id})
//   .then((results) => {
//     res.json(results);
//   }).catch((err) => {
//     res.json({message: 'Cannot find this episode', err: err});
//   });
//   // res.send("Find episodes");
//   res.json(episodeData);
// });

// U S E R

// User using Review & Playlist
const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true,
    maxlength: 30,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken:  {
    type: String,
    default: ()=> crypto.randomBytes(128).toString('hex')
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  }
})

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({accessToken: req.header('Authorization')})
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({loggedOut: true})
  }
}

app.post("/users", async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const user = new User({name, email, password: bcrypt.hashSync(password)});
    await user.save()
    res.status(201).json({id:user._id, accessToken: user.accessToken})
    }catch(err){
      res.status(400).json({message:'Could not create user', errors: err.errors})
  }
});

app.post("/login", async(req, res) => {
  const user = await User.findOne({email: req.body.email})
  if (user && bcrypt.compareSync(req.body.password, user.password)){
    res.json({userId: user._id, accessToken: user.accessToken})
  } else {
    res.json({notFound: true})
  }
});

app.get('/user', authenticateUser)
app.get("/user", (req, res) => {
  // res.send("Find episodes");
  res.json({secret: "This is a user page"});
});

// R E V I E W
// Review using User & Episode
const Review = mongoose.model('Review', {
  episode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Episode'
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  text: {
    type: String,
    maxlength: 1000,
    required: true
  }
})

app.post("/reviews", async (req, res) => {
  try {
    const {episode, user, text} = req.body;
    const review = new Review({episode, text});
    await review.save()
    // add review to episode
    .then(newReview => {
      const addReview = newReview._id
      return Episode
      .findByIdAndUpdate(episode,
        { $push: { "reviews": addReview }}
      )})    
      res.status(201).json({id:review._id})
    }catch(err){
      res.status(400).json({message:'Could not create review', errors: err.errors})
  }
});

// // POST new character
// app.post("/characters", (req, res) => {
//   const jsonBody = req.body
//   const character = new Character(jsonBody)
//   const userId = jsonBody.user
  
//   character.save()
//   .then(newCharacter => {    
//     const update = newCharacter._id
    
//     return User
//     .findByIdAndUpdate(userId,
//       { $push: { "characters": update } },
//       { "new" : true})
//   })
//   .then(() => {
//     res.status(201).json({ created: true})})  
//   .catch(err => {
//     res.status(400).json({ created: false, errorMsg: err.message })
//   })
// })

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// 5e58d0978d662707936f4763