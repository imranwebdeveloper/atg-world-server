const mongoose = require("mongoose");
const connectBD = async () => {
  await mongoose.connect(
    "mongodb+srv://emran333:25022117db@cluster0.qehae6m.mongodb.net/atgWorld",
    () => {
      console.log("DB Connected");
    }
  );
};

module.exports = { connectBD };
