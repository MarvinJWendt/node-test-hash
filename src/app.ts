const crypt = require('crypto')

module.exports = (hash: string, string: string, algorithm = 'guess') => {

  if (string === null) throw TypeError('String cannot be null')
  if (hash === null) throw TypeError('Hash cannot be null')

  if (algorithm === 'guess') {
    for (let index in crypt.getHashes()) {
      try {
        if (crypt.createHash(crypt.getHashes()[index]).update(string).digest('hex').toString() === hash.toString()) return true
      } catch (err) {
        console.log(err)
      }
    }
  } else {
    if (algorithm == null) throw TypeError('Algorithm cannot be null')
    if (crypt.createHash(algorithm).update(string).digest('hex').toString() === hash.toString()) return true
  }

  return false
}