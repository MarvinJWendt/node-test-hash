const crypto = require('crypto')


module.exports = function (hash, string) {


  for (let algo in crypto.getHashes()) {
    try {
      if (crypto.createHash(crypto.getHashes()[algo]).update(string).digest('hex').toString() == hash.toString()) return true
    }
    catch (err) {
      console.log(err)
    }
  }

  return false

}