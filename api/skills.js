

import { sql } from '@vercel/postgres';     
export default async function handler(req, res) {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
}