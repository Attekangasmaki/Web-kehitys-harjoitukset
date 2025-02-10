import promisePool from '../utils/database.js';


const getAllEntries = async () => {
  const [rows] = await promisePool.query('SELECT entry_id, user_id, entry_date, mood, weight, sleep_hours, notes, created_at FROM DiaryEntries');
  console.log(rows);
  return rows;
};


const selectEntryById = async (entryId) => {
  try {
    if (!entryId) {
      throw new Error("Entry ID is required");
    }

    const [rows] = await promisePool.query(
      'SELECT user_id, username, email, created_at, user_level FROM USERS WHERE user_id = ?',
      [entryId]
    );

    if (rows.length === 0) {
      throw new Error("Entry not found");
    }

    return rows[0];
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
};

export {selectEntryById, getAllEntries};
