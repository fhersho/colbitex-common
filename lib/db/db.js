'use strict'

const pg = require('pg')

// const connectionString = process.env.DATABASE_URL || 'postgres://colbitex:12345678@localhost:5432/colbitex_bd'
// const connectionString = process.env.DATABASE_URL || 'postgres://colbitex:12345678@localhost:3389/colbitex_bd'

const config = {
  user: 'colbitex', // env var: PGUSER
  database: 'colbitex_bd', // env var: PGDATABASE
  password: '12345678', // env var: PGPASSWORD
  // port: 5432, // env var: PGPORT
  port: 3389, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

class DB {

  constructor () {
    this.connected = false
  }

  connect () {
    return new Promise((resolve, reject) => {
      pool.connect((err, conn, done) => {
        if (err) reject(err)
        this.connected = true
        this.connection = conn
        this.done = done
        resolve()
      })
    })
  }

  query (sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (err, result) => {
        if (err) reject(err)
        this.done()
        resolve(result.rows)
      })
    })
  }
}

module.exports = DB
