require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/',(req,res) =>{

  res.send("hello lawrence");

});

app.listen(PORT,() =>{
  console.log(`server started`);
});