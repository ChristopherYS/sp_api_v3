import initializeDatabase from "../db/database.js";
import bcrypt from "bcrypt";

// Create a new registrar
export const createRegistrar = async (registrarData) => {
  const db = await initializeDatabase();
  try {
    const {
      school_id,
      name,
      address,
      email_address,
      position,
      username,
      password,
    } = registrarData;
    const hashedPassword = await bcrypt.hash(password, 12); // Hash the password
    const result = await db.run(
      "INSERT INTO registrar (school_id, name, address, email_address, position, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        school_id,
        name,
        address,
        email_address,
        position,
        username,
        hashedPassword,
      ]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Get all registrars
export const getAllRegistrars = async () => {
  const db = await initializeDatabase();
  try {
    const registrars = await db.all("SELECT * FROM registrar");
    return registrars;
  } finally {
    await db.close();
  }
};

// Find a registrar by username
export const findRegistrarByUsername = async (username) => {
  const db = await initializeDatabase();
  try {
    const registrar = await db.get(
      "SELECT * FROM registrar WHERE username = ?",
      [username]
    );
    return registrar;
  } finally {
    await db.close();
  }
};

// Update registrar
export const updateRegistrar = async (id, updatedFields) => {
  const db = await initializeDatabase();
  try {
    const { school_id, name, address, email_address, position } = updatedFields;
    const result = await db.run(
      "UPDATE registrar SET school_id = ?, name = ?, address = ?, email_address = ?, position = ? WHERE id = ?",
      [school_id, name, address, email_address, position, id]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Update registrar username
export const updateRegistrarUsername = async (id, newUsername) => {
  const db = await initializeDatabase();
  try {
    const result = await db.run(
      "UPDATE registrar SET username = ? WHERE id = ?",
      [newUsername, id]
    );
    return result;
  } finally {
    await db.close();
  }
};

// Update registrar's password
export const updateRegistrarPassword = async (id, newPassword) => {
  const db = await initializeDatabase();
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12); // Hash the new password
    const result = await db.run(
      "UPDATE registrar SET password = ? WHERE id = ?",
      [hashedPassword, id]
    );
    return result;
  } finally {
    await db.close();
  }
};

// View registrar info by ID
export const getRegistrarById = async (id) => {
  const db = await initializeDatabase();
  try {
    const registrar = await db.get("SELECT * FROM registrar WHERE id = ?", [
      id,
    ]);
    return registrar;
  } finally {
    await db.close();
  }
};

// Delete a student
export const deleteRegistrar = async (id) => {
  const db = await initializeDatabase();
  try {
    const result = await db.run("DELETE FROM registrar WHERE id = ?", [id]);
    return result;
  } finally {
    await db.close();
  }
};