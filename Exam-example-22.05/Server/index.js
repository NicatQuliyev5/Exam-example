const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const { Schema } = mongoose
const bodyParser = require("body-parser")
const port = 2205
const DB = "mongodb+srv://nijat5:yaxshi2004@exam-quiz-22-05.psbtndk.mongodb.net/?retryWrites=true&w=majority&appName=exam-quiz-22-05"

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const shopSchema = new Schema(
    {
        title: { type: String, require: true },
        price: { type: Number, require: true },
        imgSrc: { type: String, require: true },
        discountPercentage: { type: Number, require: true },
        isNewShop: { type: Boolean, require: true },
        categoryShop: { type: String, require: true },
    },
    { timestamps: true }
)

const Shop = mongoose.model("Shop", shopSchema)

app.get('/shop', async (req, res) => {
    const shops = await Shop.find({})
    res.send({
        message: "Get all data is success",
        data: shops,
        error: null
    })
})

app.get('/shop/:id', async (req, res) => {
    const { id } = req.params
    const shop = await Shop.findById(id)
    res.send({
        message: "Get one data is success",
        data: shop,
        error: null
    })
})

app.delete('/shop/:id', async (req, res) => {
    const { id } = req.params
    await Shop.findByIdAndDelete(id)
    const shops = await Shop.find({})
    res.send({
        message: "Get one data is success",
        data: shops,
        error: null
    })
})

app.post('/shop', async (req, res) => {
    const newShop = new Shop({ ...req.body })
    newShop.save()
    const shops = await Shop.find({})
    res.send({
        message: "Get all data is success",
        data: shops,
        error: null
    })
})


mongoose.connect(DB).then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log(err)
})
