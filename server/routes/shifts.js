/*
* Using couch db to install
echo "deb https://apache.bintray.com/couchdb-deb {distribution} main" \
    | sudo tee -a /etc/apt/sources.list
    yarn add nano
*/
const cryptoRandomString = require('crypto-random-string');
const { Router } = require('express');
const router = Router();
const nano = require('nano')('http://localhost:5984');
nano.db.create('shifts');
const shifts = nano.db.use('shifts');

router.get('/shifts', function(req, res) {
  res.json({ id: cryptoRandomString({ length: 6, type: 'url-safe' }) });
});

router.post('/shifts/:id', function(req, res) {
  shifts.insert({ ...req.params, ...req.body }, null, function(err, body) {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      res.json(body);
    }
  });
});

module.exports = router;
