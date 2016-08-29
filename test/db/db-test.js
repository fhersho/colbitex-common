'use strict'

const assert = require('assert')
const DB = require('../../lib/db/db')

const db = new DB()

describe('Conexión a la BD', () => {
  it('deberia existir la conexión', () => {
    assert.ok(db.connected)
  })
})
