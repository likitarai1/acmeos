import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Contentpage = () => {
  const [contentinfo, setContentInfo] = useState([
    {
      id: 'c1',
      title: 'Introduction To OS',
      desp: 'Definition, Function & Functionalities of OS, Types of OS.',
      link: '/chap1',
    },
    {
      id: 'c2',
      title: 'Process vs Thread',
      desp: 'What is Process & Thread?, Similarities and Difference between Process & Thread.',
      link: '/chap2',
    },
    {
      id: 'c3',
      title: 'Process Scheduling',
      desp: 'Process schedulers and Types, Process scheduling in OS, CPU Scheduling, Process Scheduling Algorithms.',
      link: '/chap3',
    },
    {
      id: 'c4',
      title: 'Process Synchronization',
      desp: 'Definition, Types of Process Synchronization, Semaphores, Classic synchronization problems.',
      link: '/chap4',
    },
    {
      id: 'c5',
      title: 'Deadlock',
      desp: 'What is Deadlock?, Deadlock Detection, Deadlock Prevantation, Deadlock Avoidance, Banker Algorithm, RAG.',
      link: '/chap5',
    },
    {
      id: 'c6',
      title: 'Memory Management',
      desp: 'Definition, Fragmentation, Paging, Pros & Cons of Paging, Page replacement algorithms.',
      link: '/chap1 ',
    },
    {
      id: 'c7',
      title: 'Disk Scheduling',
      desp: 'Definition, FCFS, SJN, SCAN algorithm, C-SCAN algorithm.',
      link: '/chap1',
    },
    {
      id: 'c8',
      title: 'Unix Commands',
      desp: 'Various UNIX commands and their description.',
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
