'use strict'

const pg = require('pg')

// const connectionString = process.env.DATABASE_URL || 'postgres://colbitex:12345678@localhost:5432/colbitex_bd'
const connectionString = process.env.DATABASE_URL || 'postgres://colbitex:12345678@localhost:3389/colbitex_bd'

class DB {

  constructor () {
    this.connected = false
    this._connect((err) => {
      if (err) throw err
    })
  }

  _connect (callback) {
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done(err)
        callback(err)
      }
      this.connected = true
      this.connection = client
      done()
      callback()
    })
  }

  query (sql, params) {
    this.connection.query(sql, params, (err, result) => {
      if (err) throw err
      return result.rows
    })
  }

  close () {
    this.connection.end((err) => {
      if (err) throw err
    })
  }
}

module.exports = DB
