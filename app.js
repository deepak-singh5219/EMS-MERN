require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();
const sample = require('./models/sample');


app.post('/sample', async (req,res) => {
  const sm =  await sample.create({
        name:"Deepak Singh"
    })

    res.status(200).json(sm);

})



module.exports = app;