import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
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
    type: Number
  },
  description: {
    type: String,
    required: true
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
  }
});

// const importEpisodeData = () => {
//   episodeData.forEach(episode => {
//     new Episode(episode).save();
//   });
// };

// importEpisodeData();

  const seedDatabase = async () => {
    await Episode.deleteMany({});

    episodeData.forEach(episode => {
      new Episode(episode).save();
    });
  };

  seedDatabase();


// Start defining your routes here
app.get("/", (req, res) => {
  // res.send("Find episodes");
  res.json(episodeData);
});

app.get("/episode/:id", (req, res) => {
  const id = req.params._id
  Episode.findOne({'_id:': id})
  .then((results) => {
    res.json(results);
  }).catch((err) => {
    res.json({message: 'Cannot find this episode', err: err});
  });
  // res.send("Find episodes");
  res.json(episodeData);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
