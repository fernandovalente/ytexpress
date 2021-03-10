const Products = require('../listproducts.js');

module.exports = app => {
    const products = Products();

    app.get("/products", (req, res) => {
        res.json(products);
    });

    app.get("/products/:id", (req, res) => {
        res.json(products.find( (product) => {
            return +req.params.id === product.id;
        }));
    });
    
    app.post("/products/add", (req, res) => {
        console.log(req.body);
        res.sendStatus(200);
    });
};