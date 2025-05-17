// db/database.js

import { open } from "sqlite";
import Database from "better-sqlite3";

// Database connection initialization function
const initializeDatabase = async () => {
  try {
    const db = await open({
      filename: "./student_profile.db",
      driver: Database
    });
    console.log("Database connected successfully");
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default initializeDatabase;