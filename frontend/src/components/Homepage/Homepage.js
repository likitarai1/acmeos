import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import mainImg from './../../images/mainImg.png';
import joinusImg from './../../images/joinus.png';
import doubt from './../../images/doubt.svg';
import terminal from './../../images/terminal.svg';
import test from './../../images/test.svg';
// import ju from './../../images/1.svg';
import HomeButton from '../Button/HomeButton';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import './Homepage.css';

const Homepage = () => {
  const [cardDtls, setCardDtls] = useState([
    {
      img: doubt,
      title: 'Doubt',
      desp: 'Doubt filled your mind?? Got stucked?? No worries, just ask your doubts here and get your answer...',
      link: '/doubt',
    },
    {
      img: terminal,
      title: 'Terminal',
      desp: '',
      link: '/terminal',
    },
    {
      img: test,
      title: 'Test',
      desp: "Don't stress, Do your Best, Forget the Rest, And start your test.",
      link: '/test',
    },
  ]);
  return (
    <Container className="p-0 mt-2 oflw" fluid>
      <Row bg="#0d6efd" className="p-4 flex-column-reverse flex-md-row">
        <Col md={1} style={{ width: '5%' }}></Col>
        <Col md={6} className="textcol">
          <Stack gap={3}>
            <div className="tagline">
              Our vision is to teach you the invisible part of your instruments.
            </div>
            <div>
              <a href="/chapters">
                <HomeButton title="Learn More" />
              </a>
            </div>
          </Stack>
        </Col>
        <Col md={5}>
          <img className="mainImg" alt="Working on Desk" src={mainImg} />
        </Col>
      </Row>
      <Row className="p-0 flex-md-row">
        <Col>
          <HomeCarousel />
        </Col>
      </Row>
      <Row as="div" className="servicesDiv">
        <div className="heading weprovide">We provide</div>
        <div className="servicescarddiv">
          <Row xs={1} md={2} lg={3} className="g-5 p-5">
            {cardDtls.map(
              (idx, key) => (
                console.log(key, idx),
                (
                  <Col key={key}>
                    <a href={idx.link}>
                      <Card className="servicescard">
                        <div className="imgBox">
                          <Card.Img variant="top" src={idx.img} />
                        </div>
                        <Card.Body className="cardText">
                          <div className="cardTitle">{idx.title}</div>
                          <Card.Text>{idx.desp}</Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                    {/* <div className="card">
                  <div className="imgBx">
                    <img src="https://images.unsplash.com/photo-1642707949566-0c45f08faae2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzQxODY0MA&ixlib=rb-1.2.1&q=85" />
                  </div>
                  <div className="content">
                    <h2>Card One</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div> */}
                  </Col>
                )
              )
            )}
          </Row>
        </div>
      </Row>
      <Row bg="#0d6efd" className="p-4 flex-column-reverse flex-md-row">
        <Col md={1} style={{ width: '5%' }}></Col>
        <Col md={5}>
          <img className="mainImg" alt="Working on Desk" src={joinusImg} />
        </Col>
        <Col md={6} className="textcol">
          <Stack gap={3} className="joinUsSpacing">
            <div className="heading joinus">Join Us</div>
            <div className="taglineText">Be a part of this incredible community</div>
            <div>
              <a href="/login">
                <HomeButton title="Join Us Now" />
              </a>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
