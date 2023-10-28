import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Img/caro.avif";
import Image1 from "../Img/caro1.avif";
import Image2 from "../Img/caro2.avif";
import Image3 from "../Img/caro3.avif";

export function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay:true,
   
      
    };
  return (
    <section id="slide">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <div className="slide-show">
                <img src={Image} alt="Carosel"/>
              </div>
              <div className="slide-show">
                <img src={Image1} alt="Carosel"/>
              </div>
              <div className="slide-show">
                <img src={Image2} alt="Carosel"/>
              </div>
              <div className="slide-show">
                <img src={Image3} alt="Carosel"/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Carousel;
