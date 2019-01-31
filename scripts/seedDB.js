const mongoose = require("mongoose");
const db = require("../models");

// collection of dummy words to have content 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wordlist"
);

const wordsSeed = [
  {
    word: "Toehawk",
    meaning: "Toe hair that is craftully in a manner that is akin to a mohawk",
    link: "https://www.urbandictionary.com/define.php?term=Toehawk"
  },
  {
    word: "Hypechill",
    meaning: "an adjective given to something that may be defined as little more than cool, yet less than rad",
    link:
      "https://www.urbandictionary.com/define.php?term=Hypechill"
  },
  {
    word: "50 Nic",
    meaning: "The normal amount of nicotine in a juul when you hit it. A slightly more scientific way of getting a hit",
    link:
      "https://www.urbandictionary.com/define.php?term=50+nic"
  },
  {
    word: "Windows 10",
    meaning: "To keep asking again and again until the person says yes",
    link:
      "https://www.urbandictionary.com/define.php?term=Windows%2010"
  }
];

db.Words
  .remove({})
  .then(() => db.Words.collection.insertMany(wordsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
