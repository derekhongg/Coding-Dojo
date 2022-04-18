const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Player Name is required"],
        minLength:[3, "Player name must be at least 3 characters."]
    },
    position:{
        type: String,
        required: [true, "Player Position is required"]
    },
    gameOneStatus:{
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameTwoStatus:{
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameThreeStatus:{
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }
}, {timestamps: true})

const Player = mongoose.model('Player', TeamSchema);

module.exports = Player;