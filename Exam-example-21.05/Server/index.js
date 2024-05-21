const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 2004;
const DB =
  "mongodb+srv://nijat5:yaxshi2004@exam-example-21-05.1ysjptv.mongodb.net/?retryWrites=true&w=majority&appName=Exam-example-21-05";

app.use(cors());
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    imgSrc: { type: String, require: true },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

app.get("/menu", async (req, res) => {
  const menus = await Menu.find({});
  res.send({
    message: "Hello World!",
    response: menus,
    error: null,
  });
});

app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const menu = await Menu.findById(id);
  res.send({
    message: "Hello World!",
    response: menu,
    error: null,
  });
});

app.delete("/menu/:id", async (req, res) => {
  const { id } = req.params;
  await Menu.findByIdAndDelete(id);
  const menus = await Menu.find({});
  res.send({
    message: "Hello World!",
    response: menus,
    error: null,
  });
});

app.patch("/menu/:id", async (req, res) => {
  const { id } = req.params;
  await Menu.findByIdAndUpdate(id, { ...req.body });
  const menus = await Menu.find({});
  res.send({
    message: "Hello World!",
    response: menus,
    error: null,
  });
});

app.post("/menu", async (req, res) => {
  const newMenu = new Menu({ ...req.body });
  newMenu.save();
  res.send({
    message: "Hello World!",
    response: newMenu,
    error: null,
  });
});

mongoose
  .connect(DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
