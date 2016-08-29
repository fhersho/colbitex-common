'use strict'

const assert = require('assert')
const UserManager = require('../../lib/db/user-manager')

const userManager = new UserManager()

describe('UserManager', () => {
  describe('getUserByMail', () => {
    it('No se deben encontrar registros, la lista debe ser vacia', (done) => {
      userManager.getUserByMail('xxxxxx', (err, res) => {
        if(err) return done(err)

        if(res == null) return done(new Error('La respuesta es null'))

        if(res.length === 0) return done()
      })
    })

    it('Se deben encontrar registros', (done) => {
      userManager.getUserByMail('fhersho@gmail.com', (err, res) => {
        if(err) return done(err)

        if(res == null) return done(new Error('La respuesta es null'))

        if(res.length === 0) return done(new Error('No se encontraron registros'))

        if(res.length > 0) return done(null, 'aja') 
      })
    })

  })
})
