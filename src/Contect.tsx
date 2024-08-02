import React from 'react';
import { FaRegAddressCard, FaInstagram, FaGlobeAfrica, FaFacebook, FaLongArrowAltRight } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCall, IoLogoTwitter } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { Row, Col } from 'react-bootstrap';


  interface ContactProps {
    id: string;
  }
  
  const Contact: React.FC<ContactProps> = ({id}) => {
  return (
    <div id={id}>
    <div className="node_task_header">
      <p className="nav_header">CONTACT</p>
      <p className="bar_box">CONTACT US</p>
      <p className="task_header_box">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
      </p>

      <div className="grid-box">
        <div className="grid_section">
          <div className="tr">
            <FaRegAddressCard />
          </div>
          <p className="tsx">ADDRESS</p>
          <p className="jsx">198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="grid_section">
          <div className="tr">
            <IoCall />
          </div>
          <p className="tsx">CONTACT NUMBER</p>
          <p className="jsx">9863456756</p>
        </div>
        <div className="grid_section">
          <div className="tr">
            <MdEmail />
          </div>
          <p className="tsx">EMAIL ADDRESS</p>
          <p className="jsx">info@yoursite.com</p>
        </div>
        <div className="grid_section">
          <div className="tr">
            <FaGlobeAfrica />
          </div>
          <p className="tsx">WEBSITE</p>
          <p className="jsx">yoursite.com</p>
        </div>
      </div>

      <Row className="o">
        <Col className="y">
          <div className="author">
            <p className="tier-title">!</p>
            <p className="cl">Sorry! Something went wrong.</p>
            <p className="Quest">
              This page didn't load Google Maps correctly. See the JavaScript console for technical details.
            </p>
          </div>
        </Col>
        <Col className="flex">
          <div className="Location">
            <input
              type="text"
              placeholder="Your Name"
              className="location_text_box"
            />
          </div>
          <div className="Location">
            <input
              type="email"
              placeholder="Your Email"
              className="location_text_box"
            />
          </div>
          <div className="Location">
            <input
              type="text"
              placeholder="Subject"
              className="location_text_box"
            />
          </div>
          <div className="Location">
            <textarea placeholder="Message" className="search_text_box" />
          </div>
          <button className="google">Send Message</button>
        </Col>
      </Row>

      <div className="custom_header">
        <div className="grid-cont_tittle">
          <div className="grid_header">
            About DigiLab
            <br />
            <p className="track_top">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="df">
              <div className="uy">
                <IoLogoTwitter />
              </div>
              <div className="uy">
                <FaFacebook />
              </div>
              <div className="uy">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="grid_header">
            Links
            <br />
            <p className="track_top">
              <FaLongArrowAltRight />
              Home
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              About
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Service
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Project
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Contact
            </p>
          </div>
          <div className="grid_header">
            Services
            <br />
            <p className="track_top">
              <FaLongArrowAltRight />
              Web Design
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Web Development
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Business Strategy
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Data Analysis
            </p>
            <p className="track_top">
              <FaLongArrowAltRight />
              Graphic Design
            </p>
          </div>
          <div className="grid_header">
            Have a Question?
            <br />
            <p className="track_top">
              <FiMapPin /> 203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className="track_top">
              <IoMdCall /> 9488877366
            </p>
            <p className="track_top">
              <CgMail /> info@yoursite.com
            </p>
          </div>
        </div>
        <div className="tak_header">
          Copyright ©2024 All rights reserved | This template is made with by Colorlib
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
