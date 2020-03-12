import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';
import episodeData from "./data/episode-data.json";

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
    // have to define a type? Can accept several?
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
  }
});
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
// Review using User & Episode
const Review = mongoose.model('Review', {
  episode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Episode'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    maxlength: 1000,
    required: true
  }
})
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

const importEpisodeData = () => {
  episodeData.forEach(episode => {
    new Episode(episode).save();
  });
};

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({accessToken: req.header('Authorization')})
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({loggedOut: true})
  }
}
// Start defining your routes here
app.get("/episodes", (req, res) => {
  // res.send("Find episodes");
  res.json(episodeData);
});

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
app.get('/user', authenticateUser)
app.get("/user", (req, res) => {
  // res.send("Find episodes");
  res.json({secret: "This is a user page"});
});
app.get("/login", (req, res) => {
  // res.send("Find episodes");
  res.json({secret: "This is a user page"});
});

app.get("/sessions", async(req, res) => {
  const user = await User.findOne({email: req.body.email})
  if (user && bcrypt.compareSync(req.body.password, user.password)){
    res.json({userId: user._id, accessToken: user.accessToken})
  } else {
    res.json({notFound: true})
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// 5e58d0978d662707936f4763