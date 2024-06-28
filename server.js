const express = require('express');
const { Pool } = require('pg');
const InquirerFunctions = require("./functions.js")

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

app.get('/api/department', (req, res) => {
  const sql = `SELECT * FROM department`;

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

app.get('/api/roles', (req, res) => {
  const sql = `SELECT * FROM roles`;

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

app.get('/api/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;
  
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

  app.post('/api/department2', (req, res) => {
    const { department_name } = req.body;
    const sql = `INSERT INTO department (department_name) VALUES ('${department_name}')`
    
    pool.query(sql, (err, { rows }) => {
      const response = {
        status: 'success',
        data: department_name,
      }
    res.status(201).json(response);

    })

  });


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });