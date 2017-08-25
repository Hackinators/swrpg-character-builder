const mongoose = require('mongoose');

let Species = new mongoose.Schema({
    speciesName: {type: String},
    planetOfOrigin: {type: String},
    characteristics: {
        brawn: {type: Number},
        agility: {type: Number},
        intellect: {type: Number},
        cunning: {type: Number},
        willpower: {type: Number},
        presence: {type: Number}
    },
    woundThreshold: {type: Number} + characteristics.brawn,
    strainThreshold: {type: Number} + characteristics.willpower,
    abilities: [],
    history: {
        intro: {type: String},
        physiology: {type: String},
        socialogy: {type: String},
        homeWorld: {type: String},
        language: {type: String}
        forcePerception: {type: String},

    },
    languages: [],
    startingXP: {type: Number},


    
});



module.exports = mongoose.model('Species', Species); 