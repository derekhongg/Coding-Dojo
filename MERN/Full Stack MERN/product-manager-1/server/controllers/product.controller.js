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
    Product.findOne({_id: params._id})
        .then((Product) => res.json(Product))
        .catch((err) => console.log(err));
};

const createNewProduct = (req, res) => {
    const { body } = req;
    Product.create(body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
    };

module.exports = {
    findAllProducts,
    findOneProduct,
    createNewProduct
};