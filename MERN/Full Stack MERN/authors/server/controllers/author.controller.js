const { response } = require('express');
const Author = require('..//models/author.model');

const findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error:(err)})
        });
}

const findOneAuthor = (req, res) => {
    const {params} = req;
    Author.findOne({_id: params.id})
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) => res.status(400).json(err))
};

const createNewAuthor = (req, res) => {
    const { body } = req;
    Author.create(body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor)})
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
};

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true, 
        runValidators:true
    })
        .then(updatedAuthor => {
            console.log(updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        });
}

const deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    findAllAuthors,
    findOneAuthor,
    createNewAuthor,
    updateAuthor,
    deleteAuthor
};