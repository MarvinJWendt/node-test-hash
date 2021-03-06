import test from 'ava'

const testHash = require('../src/app.js')

test('Crypto supported', t => {
  try {
    const crypto = require('crypto')
    crypto.toString()
  } catch (err) {
    t.fail('Crypto is disabled!')
  }

  t.pass()
})


test('Check MD5', t => {
  t.true(testHash('b10a8db164e0754105b7a99be72e3fe5', 'Hello World'))
})

test('Check SHA1', t => {
  t.true(testHash('0a4d55a8d778e5022fab701977c5d840bbc486d0', 'Hello World'))
})

test('Check SHA256', t => {
  t.true(testHash('a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e', 'Hello World'))
})

test('Check SHA512', t => {
  t.true(testHash('2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f27e853d8585719e0e67cbda0daa8f51671064615d645ae27acb15bfb1447f459b', 'Hello World'))
})

test('Check RIPEMD-160', t => {
  t.true(testHash('a830d7beb04eb7549ce990fb7dc962e499a27230', 'Hello World'))
})

test('Check Whirlpool', t => {
  t.true(testHash('b77b284bffc952efee36a94397a0ce11e8624668e33b7020a80eb2fb21096f0a08518c50d023de12b010c2e30b93b5837dc471d899608d786fe9a6b60112ea4a', 'Hello World'))
})

test('Check "not a hash"', t => {
  t.false(testHash('NOT_A_HASH', 'Hello World'))
})

test('Check empty hash', t => {
  t.false(testHash('', 'Hello World'))
})

test('Check empty string', t => {
  t.true(testHash('da39a3ee5e6b4b0d3255bfef95601890afd80709', ''))
})

test('Throw error on null hash', t => {
  const error = t.throws(() => testHash(null, 'Hello World'), TypeError)
  t.is(error.message, 'Hash cannot be null')
})

test('Throw error on null string', t => {
  const error = t.throws(() => testHash('da39a3ee5e6b4b0d3255bfef95601890afd80709', null), TypeError)
  t.is(error.message, 'String cannot be null')
})

test('Check known hash', t => {
  t.true(testHash('b10a8db164e0754105b7a99be72e3fe5', 'Hello World', 'md5'))
})

test('Throw error on null algorithm', t => {
  const error = t.throws(() => testHash('da39a3ee5e6b4b0d3255bfef95601890afd80709', 'Hello World', null), TypeError)
  t.is(error.message, 'Algorithm cannot be null')
})

test('Check non-latin characters', t => {
  t.false(testHash('äüöß', 'Hello World'))
})