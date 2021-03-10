import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;

let mid = (req, res, next) => {
    console.log(req.query);
    console.log(req.params);
    next();
};

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

// Controllers
app.get("/", (req, res) => {
    res.json(Products);
});

app.get("/products/:id", (req, res) => {
    res.json(Products.find( (product) => {
        return +req.params.id === product.id;
    }));
});

app.post("/products/add", mid, (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => console.log('Listening on port ' + port));
