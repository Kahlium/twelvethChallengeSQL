const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
    {
      user: 'postgres',
      password: '3V4terC_odepass',
      host: 'localhost',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
)

pool.connect();

app.get('/api/employee', (req, res) => {
    const sql = `SELECT id, first_name FROM employee`;
  
    pool.query(sql, (err, { rows }) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });