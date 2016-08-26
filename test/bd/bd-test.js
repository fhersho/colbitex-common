'use strict'

const test = require('ava')
const DB = require('../../lib/db/db')
const db = new DB()
test('Existe conexion a la BD: getConnetion', async (t) => {
  await t.is(typeof db.getConnection, 'function', 'getConnection es una función')
})
