// const mongoos = require("mongoose");

// const connectDB = async () => {
//     try {
// await mongoos.connect(process.env.mongo_url)
// console.log("MongoDB connected successfully");

//   }catch(error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
// 
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;