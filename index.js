const express = require("express")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())







app.get("/", async (req, res) => {
    res.send("<h1>Grocery server is running</h1>")
})

app.listen(port, () => {
    console.log(`Grocery server is running on http://localhost:${port}`)
})