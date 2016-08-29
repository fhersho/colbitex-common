'use strict'

const test = require('ava')
const DB = require('../../lib/db/db')

const db = new DB()

test('Conexión a la BD', async t => {
  await db.connect().then(res => {},
  err => {
    t.fail('Ocurrio un error al momento de realizar la Conexión a la BD: ' + err)
  })
  t.true(db.connected, 'Deberia existir conexion a la BD')
})
