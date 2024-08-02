import React from "react";
import "./CustomCarousel.css";
import image from "../public/assets/lap.jpg";
import timage from "../public/assets/c.jpg";
import vimage from "../public/assets/lap.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

  interface AboutProps {
    id: string;
  }
  
  const About: React.FC<AboutProps> = ({id}) => {
  return (
    <div id={id}>
    <div className="container">
      <div className="pass">
        <Row className="field">
          <Col className="container_top">
            <div
              className="top_top"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </Col>
          <Col className="header_app">
            <p className="class">WELCOME TO DIGILAB</p>
            <p className="set">We Are Digital Agency</p>
            <p className="index">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="update">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <p className="top_tep">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="BSNL">20 YEARS OF EXPERIENCE</p>
          </Col>
        </Row>
      </div>
      <div className="header_box_name">
      {/* <div className="uai"> */}
        <p className="outer">ABOUT US</p>
        <p className="about">OUR STAFF</p>
        <p className="safe">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="grid-container">
          <div className="hopmap-container">
            <img className="grid-item" src={image} alt="example" />
            <div className="grid">
              Lloyd Wilson <br />
              <p className="track">CEO, FOUNDER</p>
            </div>
          </div>
          <div className="hopmap-container">
            <img className="grid-item" src={timage} alt="example" />
            <div className="grid">
              Rachel Parker <br />
              <p className="track">WEB DESIGNER</p>
            </div>
          </div>
          <div className="hopmap-container">
            <img className="grid-item" src={vimage} alt="example" />
            <div className="grid">
              Ian Smith <br />
              <p className="track">WEB DEVELOPER</p>
            </div>
          </div>
          <div className="hopmap-container">
            <img className="grid-item" src={timage} alt="example" />
            <div className="grid">
              Rachel Parker <br />
              <p className="track">WEB DESIGNER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
