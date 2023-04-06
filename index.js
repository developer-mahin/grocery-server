const express = require("express")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000


const categories = require("./Data/categories.json")
const products = require("./Data/products.json")

app.use(express.json())
app.use(cors())

app.get("/categories", async (req, res) => {
    res.send(categories)
})

app.get("/products", async (req, res) => {
    res.send(products)
})

app.get("/category/:id", async (req, res) => {
    const id = req.params.id;
    const selectedCategory = products.filter(product => product.category_id === id)
    res.send(selectedCategory)
})


app.get("/", async (req, res) => {
    res.send("<h1>Grocery server is running</h1>")
})

app.listen(port, () => {
    console.log(`Grocery server is running on http://localhost:${port}`)
})