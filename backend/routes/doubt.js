const express = require('express');
const router = express.Router();
const db = require('./../connection');

// Add doubt to db
router.post('/ask', (req, res) => {
  console.log('doubt routr req ', req.body);
  const title = req.body.title;
  const doubt = req.body.doubt;
  const tags = req.body.tags;
  const date = req.body.date;
  const username = req.body.uname;

  db.query(
    'INSERT INTO doubttbl (username, title, doubt, tags, date) VALUES (?,?,?,?,?)',
    [username, title, doubt, tags, date],
    (err, result) => {
      if (err) {
        console.log('Error in inserting doubt :: ', err);
      } else {
        console.log('db res ', result);
        res.send({ result });
      }
    }
  );
});

// Fetch all doubts
router.get('/getdoubt', (req, res) => {
  // console.log('doubt get route params id -- ', req.query.id);
  // console.log('doubt get route');
  db.query('SELECT * FROM doubttbl', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('getdoubt result :: ', result);
      res.send({ result });
    }
  });
});

// Fetch id specific doubt
router.get('/getdoubt/:id', (req, res) => {
  // console.log('doubt get route params id -- ', req.params.id);
  const id = req.params.id;
  db.query('SELECT * FROM doubttbl WHERE doubtid=?', [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('getdoubt result :: ', result[0]);
      res.send({ result: result[0] });
    }
  });
});

// Fetch user specific notes
router.get('/', (req, res) => {
  // console.log('doubt get route params id -- ', req.params.id);
  const id = req.query.username;
  db.query('SELECT * FROM doubttbl WHERE username=?', [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('getdoubt result :: ', result);
      res.send({ result });
    }
  });
});

module.exports = router;
