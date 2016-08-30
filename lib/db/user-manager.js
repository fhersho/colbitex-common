'use strict'

const DB = require('./db')
const sql = require('./sql')

const db = new DB()

class UserManager {
  getUserByMail (mail) {
    return new Promise((resolve, reject) => {
      db.connect().then(res => {
        db.query(sql.getUserByMail, [mail])
          .then(resultado => {
            if (resultado == null) resultado = []
            resolve(resultado)
          }, error => {
            reject(error)
          })
      }, err => {
        reject(err)
      })
    })
  }

  getUserById (id) {
    return new Promise((resolve, reject) => {
      db.connect().then(res => {
        db.query(sql.getUserById, [id])
          .then(resultado => {
            if (resultado == null) resultado = []
            resolve(resultado)
          }, error => {
            reject(error)
          })
      }, err => {
        reject(err)
      })
    })
  }
}

module.exports = UserManager
