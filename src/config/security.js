const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Muitas requisições cabra safado - Guilherme Oliveira - RGM: 2417427"
});


module.exports = limiter;
