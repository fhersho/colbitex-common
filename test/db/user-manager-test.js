'use strict'

const test = require('ava')
const UserManager = require('../../lib/db/user-manager')

const userManager = new UserManager()

test('getUserByMail', async t => {
  await userManager.getUserByMail('xxxxxx').then(res => {
    t.not(res, null, 'la resuesta no debe ser null')

    t.is(res.length, 0, 'la lista debe ser vacia')
  }, err => {
    t.fail('Ocurrio un error: ' + err)
  })
})

test('getUserByMail', async t => {
  await userManager.getUserByMail('fhersho@gmail.com').then(res => {
    t.not(res, null, 'la resuesta no debe ser null')

    t.not(res.length, 0, 'la lista no debe ser vacia')
  }, err => {
    t.fail('Ocurrio un error: ' + err)
  })
})
