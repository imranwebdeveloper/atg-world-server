const mongoose = require("mongoose");
const connectBD = async () => {
  await mongoose.connect(process.env.MONGO_SERVER, () => {
    console.log("DB Connected");
  });
};

module.exports = { connectBD };
