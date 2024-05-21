const moongose = require("moongose");

const URI = "mongodb://localhost:27017/moongose";

moongose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

module.exports = moongose.connection;
