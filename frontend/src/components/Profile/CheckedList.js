import React from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

const CheckedList = ({ list, feature }) => {
  const updateList = (id) => {
    if (feature === 'bookmark') {
      console.log('Right!!!');
      axios
        .delete('http://localhost:9000/bookmark/' + `${id}`)
        .then((res) => {
          console.log('response of bookmark delete ', res);
          alert('Bookmark removed');
          window.location.reload();
        })
        .catch((err) => {
          console.log('error in bookmark delete ', err);
        });
    }
  };

  return (
    <>
      <ListGroup>
        {console.log('data in list ?? ', list)}
        {list &&
          list.map((data, key) => {
            return (
              <InputGroup key={key}>
                <InputGroup.Checkbox
                  aria-label="Checkbox for following text input"
                  onClick={() => updateList(data.bookmarksid)}
                />
                <ListGroup.Item className="list-text">
                  <a href="/" className="link-text">
                    {data.title}
                  </a>
                </ListGroup.Item>
              </InputGroup>
            );
          })}

        {/* <InputGroup>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <ListGroup.Item className="list-text">
            <a href="/" className="link-text">
              Cras justo odio Cras justo odio Cras justo odio
            </a>
          </ListGroup.Item>
        </InputGroup>
        <InputGroup>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <ListGroup.Item className="list-text">
            <a href="/" className="link-text">
              Cras justo odio Cras justo odio Cras justo odio
            </a>
          </ListGroup.Item>
        </InputGroup> */}
      </ListGroup>
    </>
  );
};

export default CheckedList;
