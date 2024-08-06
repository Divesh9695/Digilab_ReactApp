// import React, { useState } from "react";
// import "./CustomCarousel.css";
// import image from "../public/assets/pri.jpg";
// import pimage from "../public/assets/me.jpg";
// import aimage from "../public/assets/lap.jpg";

// interface ProjectProps {
//   id: string;
// }

// const Project: React.FC<ProjectProps> = ({id}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [image, pimage, aimage];

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };
//   return (
//     <div id={id}>
//     <div>
//       <div>
//         <p className="tep">ACCOMPLISHMENTS</p>
//         <p className="search_boxs">OUR PROJECTS</p>
//         <p className="copy">
//           Far far away, behind the word mountains, far from the countries
//           Vokalia and Consonantia
//         </p>
//       </div>

//       <div className="carousel-container">
//         <div
//           className="carousel"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((img, index) => (
//             <div key={index} className="carousel-item">
//               <img
//                 className="carousel-image"
//                 src={img}
//                 alt={`Slide ${index}`}
//               />
//               <div className="carousel-caption"></div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control prev" onClick={handlePrev}>
//           ‹
//         </button>
//         <button className="carousel-control next" onClick={handleNext}>
//           ›
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Project;















import React from "react";
import Slider from "react-slick";
import "./CustomCarousel.css";
import image from "../public/assets/pri.jpg";
import pimage from "../public/assets/me.jpg";
import aimage from "../public/assets/lap.jpg";
// import uimage from "../public/assets/disk.jpg";
import himage from "../public/assets/url.jpg";
interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  const images = [image, pimage, aimage, himage ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id={id}>
      <div>
        <div>
          <p className="tep">ACCOMPLISHMENTS</p>
          <p className="search_boxs">OUR PROJECTS</p>
          <p className="copy">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <img
                  className="carousel-image_top"
                  src={img}
                  alt={`Slide ${index}`}
                />
                <div className="carousel-caption">
                  <p className="yu">Work Name</p>
                  <p className="yu">Web Design</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;


