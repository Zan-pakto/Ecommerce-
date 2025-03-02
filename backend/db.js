const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://arvind:Shahi1234@cluster0.9xbts.mongodb.net/Ecommerce"
);
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
