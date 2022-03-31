const Product = require('../models/product.model');

const findAllProducts = (req, res) =>{
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error:err})
        });
}

const findOneProduct = (req, res) => {
    const { params } = req;
    Product.findOne({_id: params.id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => console.log(err));
};

const createNewProduct = (req, res) => {
    const { body } = req;
    Product.create(body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
};

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch((err) => console.log(err));
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.json(err))
};

module.exports = {
    findAllProducts,
    findOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};