const express = require('express');
const app = express();


app.get('/', (_req, res) => {
    res.send("hello");
})

app.listen(8080, ()=>{
    console.log('🚀server listening on 8080');
})