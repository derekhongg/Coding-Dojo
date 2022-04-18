const { response } = require('express');
const Player = require('..//models/team.model');

const findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => {
            res.json(allPlayers)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error:(err)})
        });
}

const findOnePlayer = (req, res) => {
    const {params} = req;
    Player.findOne({_id: params.id})
        .then((onePlayer) => res.json(onePlayer))
        .catch((err) => res.status(400).json(err))
};

const createNewPlayer = (req, res) => {
    const { body } = req;
    Player.create(body)
        .then((newPlayer) => {
            console.log(newPlayer);
            res.json(newPlayer)})
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
};

const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true, 
        runValidators:true
    })
        .then(updatedPlayer => {
            console.log(updatedPlayer)
            res.json(updatedPlayer)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        });
}

const deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    findAllPlayers,
    findOnePlayer,
    createNewPlayer,
    updatePlayer,
    deletePlayer
};