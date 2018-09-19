import test from 'ava'
const app = require("../src/app")

test('Sample test', t => {
  t.is(app.main(), "ABC")
})
