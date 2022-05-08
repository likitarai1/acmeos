import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Contentpage = () => {
  const [contentinfo, setContentInfo] = useState([
    {
      title: 'chap 1',
      desp: 'anbcnhdj',
      link: '/chap1',
    },
    {
      title: 'chap 2',
      desp: 'anbcncdcsbdnbsmj89090j',
      link: '/chap2',
    },
    {
      title: 'chap 3',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 4',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 5',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 6',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 7',
      desp: 'anbcnh//dj',
      link: '/chap7',
    },
    {
      title: 'chap 8',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 9',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
    {
      title: 'chap 10',
      desp: 'anbcnh//dj',
      link: '/chap1',
    },
  ]);

  const uname = JSON.parse(localStorage.getItem('user'));

  const getBookmarks = () => {
    console.log("called me");
    axios
      .get('http://localhost:9000/bookmark', {
        params: {
          username: uname.username,
        },
      })
      .then((res) => {
        console.log('ghgg >> ', res);
        localStorage.setItem('bookmarks', JSON.stringify(res.data.result));
        // setBookmarks(res.data.result);
      })
      .catch((error) => {
        console.log('Axios doubt Error');
        console.log(error);
      });
  };

  useEffect(() => {
    if(uname){
      getBookmarks();
    }
   
  }, []);

  return (
    <Container fluid className="p-5">
      {contentinfo.map((info, key) => {
        return (
          <Card className="mb-3" key={key}>
            <Card.Header>
              Yet to Explore!
              <span style={{ marginLeft: '8px' }}>
                <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              </span>
            </Card.Header>
            <Card.Body>
              <Card.Title>{info.title}</Card.Title>
              <Card.Text>{info.desp}</Card.Text>
              <Button variant="primary" href={info.link}>
                View
              </Button>
              <Button variant="primary" href={info.link} style={{ marginLeft: '10px' }}>
                Start
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Contentpage;
