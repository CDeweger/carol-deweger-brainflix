 const express = require('express');
 const fs = require('fs');
 const router = express.Router();
 const { v4: uuid } = require('uuid');


 const readFile = () => {
      const videosData = fs.readFileSync('./data/videos.json');
      return JSON.parse(videosData);
    }

const writeFile = (videosData) => {
  fs.writeFileSync('./data/videos.json', JSON.stringify(videosData, null, 2));
}

// GET /videos 
router.get('/videos', (_req, res) => {
    const videosData = readFile();
    res.send(videosData.videoList);

})

// GET /videos/:id
router.get('/videos/:id', (req, res) => {
    const videosData = readFile();
    const videoId = req.params.id;
    res.send(videosData.videoDetails.filter(video => {
        return video.id === videoId;
    }).pop());
})


// POST /videos
router.post('/videos', (req, res) => {
    const videosData = readFile();
    if (req.body) {
        videosData.videoList.push({
            id: uuid(),
            title: req.body.title,
            channel: req.body.channel,
            image: "http://localhost:8080/images/upload-video-preview.jpg"
        });
        videosData.videoDetails.push(req.body);
        writeFile(videosData);
        return res.status(201).send(videosData.videoList);

    } else {
        return res.status(400).send('No request body');
    }
})

 module.exports = router;