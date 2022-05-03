// Introduction to OS
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Chap1 = () => {
  const id = 'c3';
  const uname = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const [selected, setSelected] = useState('');
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
    <div>
      {uname===null ? <></> : <i
        className={selected}
        aria-hidden="true"
        onClick={toggleSelected}
        style={{ cursor: 'pointer' }}
      ></i>}
      <p>This is a paragraph.</p>
      <p>This is a paragraph.</p>
      <p>
        This is a <code>paragraph</code>.
      </p>
      <div className="terminal space shadow">
        <div className="top">
          <div className="btns">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
          </div>
          <div className="title">bash -- 70x32</div>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/S51ETEkwrCc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Chap1;
