import promisePool from '../utils/database.js';



const getAllUsers = async () => {
  const [rows] = await promisePool.query('SELECT user_id, username, email, created_at, user_level FROM USERS');
  console.log(rows);
  return rows;
}



const selectUserById = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const [rows] = await promisePool.query(
      'SELECT user_id, username, email, created_at, user_level FROM USERS WHERE user_id = ?',
      [userId]
    );

    if (rows.length === 0) {
      throw new Error("User not found");
    }

    return rows[0];
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
};


const insertUser = async (user) => {
  try {
    const [result] = await promisePool.query(
      'INSERT INTO Users (username, password, email) VALUES (?, ?, ?)',
      [user.username, user.password, user.email],
    );

    if (result.length === 0) {
      throw new Error("User not found");
    }
    console.log('insertUser', result);

    return result.insertId;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
};


const selectUserByNameAndPassword = async (username, password) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT user_id, username, email, created_at, user_level FROM USERS WHERE username =? AND password = ?',
      [username, password]
    );
    return rows[0];
  } catch(error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
};

export {getAllUsers, selectUserById, insertUser, selectUserByNameAndPassword };

