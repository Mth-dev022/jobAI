const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

pool.connect((err) => {
    if(err) throw new err
    console.log("Connected to PostgresSQL successfully")
})
module.exports = pool
