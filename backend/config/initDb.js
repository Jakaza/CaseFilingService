import mongoose from "mongoose";

let isDbConnected = false;

async function initDb() {
  if (isDbConnected) {
    console.log("Database is already initialized.");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URL);

    isDbConnected = true;
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

function getDb() {
  if (!isDbConnected) {
    throw new Error("Database not initialized. Call initDb first.");
  }
  return mongoose.connection;
}

export { initDb, getDb };
