const express = require('express');
const router = express.Router();
const db = require('./../connection');

router.get('/', (req, res) => {
  db.query('SELECT username, email, tags FROM users WHERE username=?', [req.query.username], (err, result) => {
    if (err) {
      res.status(500).send({ error: err || 'Something went wrong' });
      console.log('profile get err ', err);
    } else {
      console.log("profile info",result);
      res.status(200).send({ result });
    }
  });
});

router.put('/', (req, res) => {
  let data = req.body;
  console.log("put body>>",data);
  db.query(
    'UPDATE users SET email=?, tags=? WHERE username=?',
    [data.email, data.tags, data.username],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err || 'Something went wrong' });
        console.log('profile put err ', err);
      } else {
        res.status(200).send({ message: 'Profile updated successfully' });
      }
    }
  );
});

module.exports = router;
