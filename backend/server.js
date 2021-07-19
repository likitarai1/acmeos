const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');
// const { response } = require('express');
const saltRounds = 10;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST'], credentials: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: 'userID',
    secret: '$%nmbdshbhsj*',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'acmeosdb',
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const cpass = req.body.cpass;
  const pass = req.body.pass;

  if (username === '') {
    res.send({ message: 'Username required' });
  } else if (email === '') {
    res.send({ message: 'Valid email required' });
  } else if (cpass === '' || pass === '') {
    res.send({ message: "Password field can't be empty" });
  } else if (cpass === pass) {
    bcrypt.hash(pass, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          'INSERT INTO users (username, email, pass) VALUES (?,?,?)',
          [username, email, hash],
          (err, result) => {
            if (err) {
              res.send({ message: 'Same username exists' });
            } else {
              console.log(result);
              console.log('email: ', email);
              console.log('name: ', username);
              res.send({ result });
            }
          }
        );
      }
    });
  } else {
    console.log("Passwords doesn't match correct it");
  }
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const pass = req.body.pass;

  db.query('SELECT * FROM users WHERE username = ?', username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      console.log('$$$ ', result[0]);
      bcrypt.compare(pass, result[0].pass, (err, response) => {
        if (response) {
          req.session.user = result;
          console.log('%%%>>>>>>>', req.session.user);

          // console.log(result);
          res.send({ msg: 'successfully logged in', userdata: req.session.user[0] });
        } else {
          res.send({ msg: 'Incorrect password' });
        }
      });
    } else {
      res.send({ message: 'User does not exist' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
