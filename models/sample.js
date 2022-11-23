const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name:{
        type: String
    }
});

module.exports = mongoose.model("sample",sampleSchema);