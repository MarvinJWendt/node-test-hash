const crypto = require('crypto')

module.exports = function (hash, string, algorithm = 'guess') {

  console.log(algorithm)

  if (string === null) throw TypeError('String cannot be null')
  if (hash === null) throw TypeError('Hash cannot be null')

  if (algorithm === 'guess') {
    for (let algo in crypto.getHashes()) {
      try {
        if (crypto.createHash(crypto.getHashes()[algo]).update(string).digest('hex').toString() === hash.toString()) return true
      } catch (err) {
        console.log(err)
      }
    }
  } else {
    if (algorithm == null) throw TypeError('Algorithm cannot be null')
    if (crypto.createHash(algorithm).update(string).digest('hex').toString() === hash.toString()) return true
  }

  return false
}

