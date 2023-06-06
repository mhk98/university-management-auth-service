import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    // await mongoose.connect("mongodb://localhost:27017");
    console.log("Database is connected successfully");
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connected database", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

boostrap();
