import "./CustomCarousel.css"; // Import custom CSS file
import image from "../public/assets/pri.jpg";
import pimage from "../public/assets/me.jpg";
import dimage from "../public/assets/b.jpg";
import timage from "../public/assets/c.jpg";
import vimage from "../public/assets/lap.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";


  interface CustomCarouselProps {
    id: string;
  }
  
  const CustomCarousel: React.FC<CustomCarouselProps> = ({id}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialslide: 2,
        },
      },

      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialslide: 2,
        },
      },
    ],
  };

  return (
    <div id={id}>
     <div>
        <div className=" active">
          <Card
            style={{
              height: 500,
              border: "1px solid rgb(37, 188, 37)",
              backgroundColor: "rgb(37, 188, 37)",
              color: "black", 
            }}
          >
            <div className="task_title">HAPPY CLIENTS </div>
            <Slider {...settings}>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={image} alt="example" />
                </h3>
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={pimage} alt="example" />
                </h3>
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={dimage} alt="example" />
                </h3>
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={timage} alt="example" />
                </h3>{" "}
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={vimage} alt="example" />
                </h3>
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
              <div className="gb">
                <h3>
                  {" "}
                  <img className="pro_task_top" src={timage} alt="example" />
                </h3>
                <Card.Text>
                  <p className="page">
                    Far for away,behind the word mountains,for from the
                    countries vokalia and consonantia there live the blind text
                  </p>
                  <h3 className="top_text_header">John Fox</h3>
                  <p className="tep_a">Businessman</p>
                </Card.Text>
              </div>
            </Slider>
          </Card>
        </div>
     </div>
     </div>
  );
};

export default CustomCarousel;
