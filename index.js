const express = require("express")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000


const categories = require("./Data/categories.json")
const products = require("./Data/products.json")

app.use(express.json())
app.use(cors())

// get api for getting all category
app.get("/categories", async (req, res) => {
    res.send(categories)
})

// get api for getting all products
app.get("/products", async (req, res) => {
    res.send(products)
})

// get api for getting categories of products
app.get("/category/:id", async (req, res) => {
    const id = req.params.id;
    const selectedCategory = products.filter(product => product.category_id === id)
    res.send(selectedCategory)
})

// get api fro getting a single product
app.get("/booking-product/:id", async (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product._id === id)
    res.send(product)
})



app.get("/", async (req, res) => {
    res.send("<h1>Grocery server is running</h1>")
})

app.listen(port, () => {
    console.log(`Grocery server is running on http://localhost:${port}`)
})