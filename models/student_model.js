// models/student_model.js

import initializeDatabase from "../db/database.js";
import bcrypt from "bcryptjs";

// Create a new student
export const createStudent = async (studentData) => {
  const db = await initializeDatabase();
  try {
    const {
      school_id,
      name,
      address,
      email_address,
      username,
      password,
      course,
    } = studentData;
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await db.run(
      "INSERT INTO student (school_id, name, address, email_address, username, password, course) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        school_id,
        name,
        address,
        email_address,
        username,
        hashedPassword,
        course,
      ]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Get all students
export const getAllStudents = async () => {
  const db = await initializeDatabase();
  try {
    const students = await db.all("SELECT * FROM student");
    return students;
  } finally {
    await db.close();
  }
};

// Get a student by ID
export const getStudentById = async (id) => {
  const db = await initializeDatabase();
  try {
    const student = await db.get("SELECT * FROM student WHERE id = ?", [id]);
    return student;
  } finally {
    await db.close();
  }
};

// Update student information
export const updateStudent = async (id, studentData) => {
  const db = await initializeDatabase();
  try {
    const { school_id, name, address, email_address, course } = studentData;
    const result = await db.run(
      "UPDATE student SET school_id = ?, name = ?, address = ?, email_address = ?, course = ? WHERE id = ?",
      [school_id, name, address, email_address, course, id]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  const db = await initializeDatabase();
  try {
    const result = await db.run("DELETE FROM student WHERE id = ?", [id]);
    return result;
  } finally {
    await db.close();
  }
};

// Find a student by username
export const findStudentByUsername = async (username) => {
  const db = await initializeDatabase();
  try {
    const student = await db.get("SELECT * FROM student WHERE username = ?", [
      username,
    ]);
    return student;
  } finally {
    await db.close();
  }
};

// Update student username
export const updateStudentUsername = async (id, newUsername) => {
  const db = await initializeDatabase();
  try {
    const result = await db.run(
      "UPDATE student SET username = ? WHERE id = ?",
      [newUsername, id]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Update student password
export const updateStudentPassword = async (id, newPassword) => {
  const db = await initializeDatabase();
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const result = await db.run(
      "UPDATE student SET password = ? WHERE id = ?",
      [hashedPassword, id]
    );
    return result;
  } finally {
    await db.close();
  }
};
