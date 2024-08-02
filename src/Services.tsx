
import React from "react";
import vbimage from "../public/assets/pri.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaBusinessTime,
  FaResearchgate,
  FaCreativeCommonsSa,
} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { SiAltiumdesigner, SiMaterialdesign } from "react-icons/si";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import "./CustomCarousel.css";

interface ServicesProps {
  id: string;
}

const  Services: React.FC<ServicesProps> = ({id}) => {
  return (
    <div id={id}>
      <Row className="display">
        <Col>
          <div className="border">
            <div className="icon">
              <FaBusinessTime />
              <span className="box_text">Business Strategy</span>
            </div>
            <div className="icon">
              <FaResearchgate />
              <span className="box_text">ReSearch</span>
            </div>
            <div className="icon">
              <IoSearchSharp />
              <span className="box_text">Data Analysis</span>
            </div>
            <div className="icon">
              <SiAltiumdesigner />
              <span className="box_text">UI Design</span>
            </div>
            <div className="icon">
              <SiMaterialdesign />
              <span className="box_text">UX Design</span>
            </div>
            <div className="icon">
              <GrTechnology />
              <span className="box_text">Technology</span>
            </div>
            <div className="icon">
              <FaCreativeCommonsSa />
              <span className="box_text">Creative</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="icon_header">
            <RiAlarmWarningFill />
          </div>
          <div>
            <span className="box_icon_box">Business Strategy</span>
          </div>
          <div>
            <p className="font">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt voluptate, quibusdam sunt iste dolores consequatur
            </p>
            <p className="font_size">
              Inventore fugit error iure nisi reiciendis fugiat illo pariatur
              quam sequi quod iusto facilis officiis nobis sit quis molestias
              asperiores rem, blanditiis! Commodi exercitationem vitae
              deserunt qui nihil ea, tempore et quam natus quaerat doloremque.
            </p>
          </div>
          <button className="props">Learn more</button>
        </Col>
      </Row>
      <div className="pri">
        <Row className="item">
          <Col></Col>
          <Col className="to">
            <div className="pra" style={{ backgroundImage: `url(${vbimage})` }}>
              <div className="search">
                <p className="props_header">Market Research</p>
                <p className="point">
                  Even the all-powerful Pointing has no control about the blind
                </p>
              </div>
              <div className="search">
                <p className="props_header">Financial Services</p>
                <p className="point">
                  Even the all-powerful Pointing has no control about the blind
                </p>
              </div>
              <div className="search">
                <p className="props_header">Online Marketing</p>
                <p className="point">
                  Even the all-powerful Pointing has no control about the blind
                </p>
              </div>
              <div className="search">
                <p className="props_header">24/7 Help & Support</p>
                <p className="point">
                  Even the all-powerful Pointing has no control about the blind
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      </div>
  );
};

export default Services;














