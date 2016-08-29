'use strict'

const DB = require('./db')
const sql = require('./sql')

const db = new DB()

class UserManager {
  getUserByMail (mail, callback) {
    let resultado = db.query(sql.getUserByMail, [mail])
    db.close()
    callback(null, resultado)
  }
}

module.exports = UserManager
