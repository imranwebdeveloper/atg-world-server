const mongoose = require("mongoose");
const connectBD = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_SERVER, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("Mongoose Connected");
};

module.exports = { connectBD };
