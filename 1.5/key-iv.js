// creating key and Initialization Vector (iv)
const crypto = require('crypto');

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

module.exports = { key, iv };