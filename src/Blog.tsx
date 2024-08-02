import React from 'react'
import "./CustomCarousel.css";
import zimage from "../public/assets/url.jpg";
import cimage from "../public/assets/disk.jpg";
import himage from "../public/assets/api.jpg";

  interface BlogProps {
    id: string;
  }
  
  const Blog: React.FC<BlogProps> = ({id}) => {
  return (
    <div className="app_css">
      <div id={id}>
        <div>
          <p className="tep_html">BLOG</p>
          <h1 className="tep_html-title">OUR BLOG</h1>
          <p className="header_table">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="grid-header">
          <div className="gp">
            <div
              className="grid_about"
              style={{ backgroundImage: `url(${zimage})` }}
            ></div>
            <div>
              <p className="section_top">
                Why Lead Generation is Key for Business Growth
              </p>
              <p className="header_top">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="read_more">Read More</button>
            </div>
          </div>
          <div className="gp">
            <div
              className="grid_about"
              style={{ backgroundImage: `url(${cimage})` }}
            ></div>
            <div>
              <p className="section_top">
                Why Lead Generation is Key for Business Growth
              </p>
              <p className="header_top">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="read_more">Read More</button>
            </div>
          </div>
          <div className="gp">
            <div
              className="grid_about"
              style={{ backgroundImage: `url(${himage})` }}
            ></div>
            <div>
              <p className="section_top">
                Why Lead Generation is Key for Business Growth
              </p>
              <p className="header_top">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="read_more">Read More</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Blog