'use strict'

const test = require('ava')
const UserManager = require('../../lib/db/user-manager')

const userManager = new UserManager()

test('getUserByMail', async t => {
  let res = await userManager.getUserByMail('xxxxxx')
  t.not(res, null, 'la resuesta no debe ser null')
  t.is(res.length, 0, 'la lista debe ser vacia')

  res = await userManager.getUserByMail('fhersho@gmail.com')
  t.not(res, null, 'la resuesta no debe ser null')
  t.not(res.length, 0, 'la lista no debe ser vacia')
})

test('getAllByIdUser', async t => {
  let res = await userManager.getUserById(1)
  t.not(res, null, 'la resuesta no debe ser null')
  t.is(res.length, 0, 'la lista debe ser vacia')

  res = await userManager.getUserById(39)
  t.not(res, null, 'la resuesta no debe ser null')
  t.true(res.length > 0, 'la lista debe ser mayor a 0')
})
