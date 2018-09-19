const crypto = require('crypto')


module.exports = function (hash, string) {

}

module.exports.md5 = function (hash, string) {
  let hashed = crypto.createHash('md5').update(string).digest('hex')
  if (hash.toString() === hashed.toString()) return true

  return false
}

module.exports.sha1 = function (hash, string) {
  let hashed = crypto.createHash('sha1').update(string).digest('hex')
  if (hash.toString() === hashed.toString()) return true

  return false
}