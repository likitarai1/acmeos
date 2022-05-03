const express = require('express');
const router = express.Router();
const db = require('./../connection');

// Add note to db
router.post('/', (req, res) => {
  console.log('note post endpoint', req.body);
  let data = {
    user: req.body.username,
    title: req.body.title,
    desp: req.body.description,
  };
  db.query(
    'INSERT INTO notes (username, title, desp) VALUES (?,?,?)',
    [data.user, data.title, data.desp],
    (err, result) => {
      if (err) {
        res.status(500).send({
          error: err || 'Something went wrong.',
        });
        console.log('here errorr :: ', err);
      } else {
        res.status(201).send({ status: 'Note added successfully' });
      }
    }
  );
});

// Fetch user specific notes
router.get('/', (req, res) => {
  let data = {
    user: req.query.username,
  };
  console.log(req.query.username);
  db.query('SELECT * FROM notes WHERE username=?', [data.user], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log('getnote result :: ', result);
      res.status(200).send({ result: result });
    }
  });
});

module.exports = router;
