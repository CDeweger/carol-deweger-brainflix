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



// router.post('/videos', (req, res) => {
//     if (
//       !req.body.title ||
//       !req.body.channel
//     ) {
//       return res.status(400).send('Please make sure to include title and description of the video');
//     }
  
//     const newVideo = {
//       id: uuid(),
//       title: req.body.title,
//       channel: req.body.channel,
//       image: req.body.image
//     };
  
//     const videosData = readFile();
//     videosData.push(newVideo);
//     writeFile(videosData);
  
//     return res.status(201).json(newVideo);
//   });


// POST /videos
router.post('/videos', (req, res) => {
    const videosData = readFile();
    if (req.body) {
        videosData.videoList.push({
            id: uuid(),
            title: req.body.title,
            channel: req.body.channel,
            image: req.body.image
        });
        videosData.videoDetails.push(req.body);
        return res.status(201).send(videosData.videoList);
    } else {
        return res.status(400).send('No request body');
    }
})

 module.exports = router;