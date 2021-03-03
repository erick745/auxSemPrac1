const mongoose = require("./connect");

const user = {
  foto: String,
  nombre: String,
  email: String,
  password: String,
};

const modeluser = mongoose.model("user", user);

module.exports = modeluser;
