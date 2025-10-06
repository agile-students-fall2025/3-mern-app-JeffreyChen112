const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "About Me" },
  paragraphs: { 
    type: [String], 
    required: true, 
    default: [
      "Hi, my name is Jeffrey and I am a senior at NYU studying Finance and Computer Science. I am from West Windsor, NJ.",
      "One of my hobbies is to run. I first started to run when I was in 6th grade and currently run for NYU's Cross Country and Track & Field teams.",
      "Another one of my hobbies is to collect New Yorker Puzzles. I currently have three puzzles built."
    ] 
  },
  imageUrl: { type: String, required: true, default: "/photo.jpg" }

});

const About = mongoose.model('About', AboutSchema)

module.exports = { About }
