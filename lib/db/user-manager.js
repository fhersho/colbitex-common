'use strict'

const DB = require('./db')
const sql = require('./sql')

const db = new DB()

class UserManager {
  getUserByMail (mail) {
    return new Promise((resolve, reject) => {
      db.connect().then(res => {
        let resultado = db.query(sql.getUserByMail, [mail])
        if (resultado == null) resultado = []
        resolve(resultado)
      }, err => {
        reject(err)
      })
    })
  }
}

module.exports = UserManager
