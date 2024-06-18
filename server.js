const express = require('express');
const inquirer = require('inquirer');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
    {
      user: 'postgres',
      password: '',
      host: 'localhost',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
)

pool.connect();

