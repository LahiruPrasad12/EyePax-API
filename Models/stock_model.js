const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  item_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "",
  },
});