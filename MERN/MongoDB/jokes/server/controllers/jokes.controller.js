const joke = require('../models/jokes.model');

const findAllJokes = (req, res) => {
    joke.find()
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

const findOne = (req, res) => {
    const { params } = req;
    joke.findOne({ _id: params._id })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

const createNewJoke = (req, res) => {
    const { body } = req;
    joke.create(body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log(err));
    };

const updateJoke = (req, res) => {
        joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => res.json(updatedJoke))
            .catch((err) => console.log(err));
    };

const deleteJoke = (req, res) => {
    joke.deleteOne({ _id: req.params._id })
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
};

module.exports = {
    findAllJokes,
    findOne,
    createNewJoke,
    updateJoke,
    deleteJoke,
};