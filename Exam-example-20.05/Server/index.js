const express = require('express')
const mongoose = require('mongoose')
const { Schema } = mongoose
require("dotenv").config()
var cors = require("cors")
var bodyParser = require("body-parser")
const PORT = process.env.PORT
const DB = process.env.DB_URL
const app = express()


app.use(cors())
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: true })

const productSchema = new Schema({
    title: { type: String, require: true },
    imgSrc: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.send({
        message: 'Hello World!',
        data: products,
        error: null
    })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.send({
        message: 'Hello World!',
        data: product,
        error: null
    })
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    const products = await Product.find({})
    res.send({
        message: 'Hello World!',
        data: products,
        error: null
    })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndUpdate(id, { ...req.body })
    const products = await Product.find({})
    res.send({
        message: 'Hello World!',
        data: products,
        error: null
    })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product({ ...req.body })
    await newProduct.save()
    const products = await Product.find({})
    res.send({
        message: 'Hello World!',
        data: products,
        error: null
    })
})

mongoose.connect(DB).then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})

