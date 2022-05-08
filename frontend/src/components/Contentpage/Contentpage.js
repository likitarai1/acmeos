import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Contentpage = () => {
  const [contentinfo, setContentInfo] = useState([
    
  ]);

  const uname = JSON.parse(localStorage.getItem('user'));
  const [completedChaptersArr, setCompletedChaptersArr] = useState([]);

  const getBookmarks = () => {
    console.log('called me');
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

  const addInProgress = (ID) => {
    let options = {
      username: uname.username,
      chapid: ID,
    };

    axios
      .post('http://localhost:9000/inprogress', options)
      .then((response) => {
        console.log('>>', response);
      })
      .catch((error) => {
        console.log('Error in progress post ', error);
      });
  };

  const getCompletedChaps = () => {
    axios
      .get('http://localhost:9000/inprogress/completed', {
        params: {
          username: uname.username,
        },
      })
      .then((res) => {
        console.log('completedChapters >> ', res);
        localStorage.setItem('completedChapters', JSON.stringify(res.data.result));
        setCompletedChaptersArr(res.data.result);
      })
      .catch((error) => {
        console.log('Axios doubt Error');
        console.log(error);
      });
  };

  useEffect(() => {
    if (uname) {
      getBookmarks();
      getCompletedChaps();
    }
    console.log("UNAME ",uname);
  }, []);

  if (uname === null) {
    return (
      <Container fluid className="p-5">
        {contentinfo.map((info, key) => {
          return(
          <Card className="mb-3" key={key}>
            <Card.Body>
              <Card.Title>{info.title}</Card.Title>
              <Card.Text>{info.desp}</Card.Text>
              <Button variant="primary" href={info.link}>
                View
              </Button>
            </Card.Body>
          </Card>);
        })}
      </Container>
    );
  }

  return (
    <Container fluid className="p-5">
      {contentinfo.map((info, key) => {
        let explored = false;
        completedChaptersArr.forEach((element) => {
          if (element.chapid === info.id) {
            explored = true;
          }
        });

        if (explored === true) {
          return (
            <Card className="mb-3" key={key}>
              <Card.Header style={{ color: 'green' }}>
                Explored!
                <span style={{ marginLeft: '8px' }}>
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>{info.desp}</Card.Text>
                <Button variant="primary" href={info.link + '?completed=true'}>
                  View
                </Button>
                <Button className="btn-success" style={{ marginLeft: '10px' }} disabled>
                  Done
                </Button>
              </Card.Body>
            </Card>
          );
        }

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
              <Button variant="primary" href={info.link + '?completed=false'}>
                View
              </Button>
              <Button
                variant="primary"
                href={info.link}
                style={{ marginLeft: '10px' }}
                onClick={() => addInProgress(info?.id)}
              >
                Start
              </Button>
            </Card.Body>
          </Card>
        );

        // completedChaptersArr.forEach((element) => {
        //   if (element.chapid === info?.id) {
        //     return (
        //       <Card className="mb-3" key={key}>
        //         <Card.Header style={{ color: 'green' }}>
        //           Explored!
        //           <span style={{ marginLeft: '8px' }}>
        //             <i className="fa fa-check-circle-o" aria-hidden="true"></i>
        //           </span>
        //         </Card.Header>
        //         <Card.Body>
        //           <Card.Title>{info.title}</Card.Title>
        //           <Card.Text>{info.desp}</Card.Text>
        //           <Button variant="primary" href={info.link}>
        //             View
        //           </Button>
        //           <Button
        //             variant="primary"
        //             href={info.link}
        //             style={{ marginLeft: '10px' }}
        //             onClick={() => addInProgress(info?.id)}
        //           >
        //             Start
        //           </Button>
        //         </Card.Body>
        //       </Card>
        //     );
        //   } else {
        //     return (
        //       <Card className="mb-3" key={key}>
        //         <Card.Header>
        //           Yet to Explore!
        //           <span style={{ marginLeft: '8px' }}>
        //             <i className="fa fa-check-circle-o" aria-hidden="true"></i>
        //           </span>
        //         </Card.Header>
        //         <Card.Body>
        //           <Card.Title>{info.title}</Card.Title>
        //           <Card.Text>{info.desp}</Card.Text>
        //           <Button variant="primary" href={info.link}>
        //             View
        //           </Button>
        //           <Button
        //             variant="primary"
        //             href={info.link}
        //             style={{ marginLeft: '10px' }}
        //             onClick={() => addInProgress(info?.id)}
        //           >
        //             Start
        //           </Button>
        //         </Card.Body>
        //       </Card>
        //     );
        //   }
        // });
      })}
    </Container>
  );
};

export default Contentpage;
