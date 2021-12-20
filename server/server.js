const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videos");

//run dotenv.config to make .env files available
require("dotenv").config();

// To access .env variables we get them from process global variable
//console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/", videoRoutes);

app.listen(PORT, () => {
  console.log(`🚀server listening on ${PORT}`);
});
