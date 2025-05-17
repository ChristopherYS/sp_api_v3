// db/database.js

import { open } from "sqlite";

// Database connection initialization function
const initializeDatabase = async () => {
  try {
    const db = await open({
      filename: "./student_profile.db",
      driver: null // sqlite package will use its default driver
    });
    console.log("Database connected successfully");
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default initializeDatabase;