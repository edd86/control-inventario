const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  ci: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model(
  "model name",
  (clientSchema = new mongoose.Schema())
);
