const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB @ ${client.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
connectDB();
