import { pool } from '../db.js'


export const pong =  async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
}