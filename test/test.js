import test from 'ava'
const crypto = require('crypto')

const app = require('../src/app')

test('Crypto supported', t => {
  try {
    const crypto = require('crypto')
  }
  catch (err) {
    t.fail('Crypto is disabled!')
  }

  t.pass()
})

test('Check MD5', t => {
  t.is(app.md5('b10a8db164e0754105b7a99be72e3fe5', 'Hello World'), true)
})

test('Check SHA1', t => {
  t.is(app.sha1('0a4d55a8d778e5022fab701977c5d840bbc486d0', 'Hello World'), true)
})

test('All', t => {
  t.is(app('0a4d55a8d778e5022fab701977c5d840bbc486d0', 'Hello World'), true)
})