'use strict'

const pg = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://colbitex:12345678@localhost:5432/colbitex_bd'

class DB {

  getConnection (callback) {
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        callback(err)
      }
      callback(null, client, done)
    })
  }

}

module.exports = DB
