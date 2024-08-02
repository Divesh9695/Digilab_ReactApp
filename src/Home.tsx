import image from "../public/assets/pri.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
interface HomeProps {
  id: string;
}

  const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id}>
    <div className="header-main-div">
      <Row className="header-row">
        <Col className="left-column">
          <div className="content-box">
            <p className="main-header">WELCOME TO THE DIGI</p>
            <p className="sub-header">Small Detail Make A Big</p>
            <p className="sub-text">Impression</p>
            <p className="description">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <button className="cta-button">Get in touch</button>
          </div>
        </Col>
        <Col className="right-column">
          <div className="image-container">
            <img className="responsive-img" src={image} alt="example" />
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Home;
