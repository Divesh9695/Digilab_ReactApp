import React, { useState } from "react";
import { motion } from "framer-motion";
import vbimage from "../public/assets/pri.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaResearchgate,
  FaCreativeCommonsSa,
} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { SiAltiumdesigner, SiMaterialdesign } from "react-icons/si";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import "./CustomCarousel.css";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

interface ServicesProps {
  id: string;
}


const Services: React.FC<ServicesProps> = ({ id }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = (): void => setIsOn(!isOn);

  const [selectedText, setSelectedText] = useState("Business Strategy");
  const [selectedDescription, setSelectedDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur"
  );
  const [selectedDetails, setSelectedDetails] = useState(
    "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
  );

  const handleClick = (title: string, description: string, details: string) => {
    setSelectedText(title);
    setSelectedDescription(description);
    setSelectedDetails(details);
  };

  
  return (
    <div id={id}>
      <div>
        <Row className="display">
          <Col>
            <div className="border">
              <div
                className="icon"
                onClick={() =>
                  handleClick(

                    "Business Strategy",
                    "Description for Business Strategy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for Business Strategy Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  
                  )
                }
              >
                <RiAlarmWarningFill />
                <span className="box_text">Business Strategy</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "ReSearch",
                    "Description for ResearcLorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for Research Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
                <FaResearchgate />
                <span className="box_text">ReSearch</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "Data Analysis",
                    "Description for Data AnalysisLorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for Data Analysis Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
                <IoSearchSharp />
                <span className="box_text">Data Analysis</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "UI Design",
                    "Description for UI Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for UI Design Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
                <SiAltiumdesigner />
                <span className="box_text">UI Design</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "UX Design",
                    "Description for UX DesignLorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for UX Design Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
                <SiMaterialdesign />
                <span className="box_text">UX Design</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "Technology",
                    "Description for Technology Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for Technology Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
                <GrTechnology />
                <span className="box_text">Technology</span>
              </div>
              <div
                className="icon"
                onClick={() =>
                  handleClick(
                    "Creative",
                    "Description for Creative Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
                    "Details for Creative Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque."
                  )
                }
              >
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
              <span className="box_icon_box">{selectedText}</span>
            </div>
            <div>
              <p className="font">{selectedDescription}</p>
              <p className="font_size">{selectedDetails}</p>
            </div>
            <button className="props">Learn more</button>
          </Col>
        </Row>
      </div>
      <div className="pri">
        <Row className="item">
          <Col></Col>
          <Col className="to">
            <div className="pra" style={{ backgroundImage: `url(${vbimage})` }}>
              <div className="search">
                <div
                  className="switch"
                  data-is-on={isOn}
                  onClick={toggleSwitch}
                >
                  <motion.div className="handle" layout transition={spring} />

                  <p className="props_header">Market Research</p>
                  <p className="point">
                    Even the all-powerful Pointing has no control about the
                    blind
                  </p>
                </div>
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
