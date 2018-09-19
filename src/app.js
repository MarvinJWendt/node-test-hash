const crypto = require('crypto')

module.exports = function (hash, string) {
  if (string === null) {
    throw TypeError('String cannot be null')
  }

  if (hash === null) {
    throw TypeError('Hash cannot be null')
  }

  for (let algo in crypto.getHashes()) {
    try {
      if (crypto.createHash(crypto.getHashes()[algo]).update(string).digest('hex').toString() === hash.toString()) return true
    } catch (err) {
      console.log(err)
    }
  }

  return false
}
