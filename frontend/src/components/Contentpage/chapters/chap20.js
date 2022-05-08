// Introduction to OS
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import '../css/chap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from '../../../util/Content';


const Chap1 = () => {
  const id = 'c1';
  const uname = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const [selected, setSelected] = useState('');
  const [done, setDone] = useState(new URLSearchParams(useLocation().search).get('completed'));

  let bookmarked;
  if(uname){
   bookmarked = JSON.parse(localStorage.getItem('bookmarks')).find(
    (chap) => chap.chapterid === id
  );}
  useEffect(() => {
    if (bookmarked === undefined) {
      setSelected('fa fa-bookmark-o');
    } else {
      setSelected('fa fa-bookmark');
    }
  }, []);
console.log("??",uname);
  // console.log(
  //   'see if chap bookmarked',
  //   JSON.parse(localStorage.getItem('bookmarks')).find((chap) => chap.chapterid === id)
  // );

  const getBookmarkID = () => {
    //getbookmarkid
    axios
      .get('http://localhost:9000/bookmark/getid', {
        params: {
          username: uname.username,
          chapid: id,
        },
      })
      .then((res) => {
        console.log('ghgg >> ', res);
        let addbookmark = JSON.parse(localStorage.getItem('bookmarks'));
        addbookmark.push(res.data.result[0]);
        localStorage.setItem('bookmarks', JSON.stringify(addbookmark));
        // setBookmarks(res.data.result);
      })
      .catch((error) => {
        console.log('Axios Error ', error);
      });
  };

  const toggleSelected = () => {
    let options = {
      username: uname.username,
      chapid: id,
    };
    if (selected === 'fa fa-bookmark') {
      // Remove bookmark
      setSelected('fa fa-bookmark-o');
      bookmarked = JSON.parse(localStorage.getItem('bookmarks')).find(
        (chap) => chap.chapterid === id
      );
      axios
        .delete('http://localhost:9000/bookmark/' + `${bookmarked.bookmarksid}`)
        .then((res) => {
          console.log('bookmark dlt response', res);
          let bomks = JSON.parse(localStorage.getItem('bookmarks'));
          bomks.pop(); // As newly added bookmark would be at the end of array
          localStorage.setItem('bookmarks', JSON.stringify(bomks));
        })
        .catch((error) => {
          console.log('Axios remove bookmark Error');
          console.log(error);
        });
    } else {
      // Add bookmark
      setSelected('fa fa-bookmark');
      axios
        .post('http://localhost:9000/bookmark', options)
        .then((res) => {
          console.log('add bookmark', res);
          getBookmarkID();
        })
        .catch((error) => {
          console.log('Axios Error');
          console.log(error);
        });
    }
  };
  return (
    <Container className="p-4 content">
      <Row>
        <Col xs={11}>
          <h1>UNIX Commands</h1>
        </Col>
        <Col xs={1}>
          {uname === null ? (
            <></>
          ) : (
            <i
              className={selected}
              aria-hidden="true"
              onClick={toggleSelected}
              style={{ cursor: 'pointer', fontSize: 'xx-large' }}
            ></i>
          )}
        </Col>
      </Row>
      <h2>Files and Directories</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Manipulating Data</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Compressed Files</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Getting Information</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Network Communication</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Message between Userss</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Programming Utilities</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      <h2>Misc Commands</h2>
      
      
      <div class="table-responsive-md">
        <table class="table difftbl">

        </table>
      </div>

      {uname === null ? (<></>) : (done === 'true' ? (
        <Button className="btn-success markDone" disabled>
          Done!
        </Button>
      ) : (
        <Button
          className="markDone"
          onClick={() => {
            Content.changeStatus(id);
            setDone('true');
          }}
        >
          Mark As Done
        </Button>
      ))}

    </Container>
  );
};

export default Chap1;
