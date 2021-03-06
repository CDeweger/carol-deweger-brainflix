const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");

require("dotenv").config();
const SERVER_URL = process.env.SERVER_URL;

const readFile = () => {
  const videosData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videosData);
};

const writeFile = (videosData) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData, null, 2));
};

// GET /videos
router.get("/videos", (_req, res) => {
  let videosData = readFile();
  videosData = videosData.map((videoInfo) => ({
    id: videoInfo.id,
    title: videoInfo.title,
    channel: videoInfo.channel,
    image: videoInfo.image,
  }));
  res.send(videosData);
});

// GET /videos/:id
router.get("/videos/:id", (req, res) => {
  const videosData = readFile();
  const videoId = req.params.id;

  res.send(
    videosData
      .filter((video) => {
        return video.id === videoId;
      })
      .pop()
  );
});

// POST /videos
router.post("/videos", (req, res) => {
  const videosData = readFile();
  if (req.body) {
    const videoObj = {
      title: req.body.title,
      description: req.body.description,
      id: uuid(),
      channel: "Carol DeWeger",
      image: SERVER_URL + "/images/upload-video-preview.jpg",
      views: Math.floor(Math.random() * 1000) + 1,
      likes: Math.floor(Math.random() * 100) + 1,
      duration: "3:30",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [],
    };

    videosData.push(videoObj);
    writeFile(videosData);
    return res.status(201).send(videosData);
  } else {
    return res.status(400).send("No request body");
  }
});

module.exports = router;
