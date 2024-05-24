const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const { Schema } = mongoose
const PORT = 2305
const DB = "mongodb+srv://nijat5:yaxshi2004@last-dance.i7qh2zx.mongodb.net/?retryWrites=true&w=majority&appName=Last-dance"

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const productSchema = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: Number, require: true },
        imgSrc: { type: String, require: true },
    }, { timestamps: true }
)

const Product = mongoose.model("Product", productSchema)

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.send({
        message: "Data is get successfully",
        data: products,
        error: null
    })
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.send({
        message: "Data is get successfully",
        data: product,
        error: null
    })
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    const products = await Product.find({})
    res.send({
        message: "Data is get successfully",
        data: products,
        error: null
    })
})

app.post('/products', async (req, res) => {
    const newProduct =  Product({ ...req.body })
    await newProduct.save()
    const products = await Product.find({})
    res.send({
        message: "Data is get successfully",
        data: products,
        error: null
    })
})

mongoose.connect(DB).then(
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
).catch((err) => {
    console.log(err)
})

