const crypto = require('crypto')


module.exports = function (hash, string) {

}

module.exports.md5 = function (hash, string) {
  let hashed = crypto.createHash('md5').update(string).digest('hex')
  return (hash.toString() === hashed.toString())
}

module.exports.sha1 = function (hash, string) {
  let hashed = crypto.createHash('sha1').update(string).digest('hex')
  return (hash.toString() === hashed.toString())
}