import Slider from "react-slick";
import '../slider/index.css'

import Pic2 from '../assets/img/2.webp'
import Pic3 from '../assets/img/3.webp'
import Pic4 from '../assets/img/4.webp'
import Pic5 from '../assets/img/5.webp'



export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div >
        <img src={Pic2} alt="" />
      </div>
      <div>
      <img src={Pic3} alt="" />

      </div>
      <div>
      <img src={Pic4} alt="" />

      </div>
      <div>
      <img src={Pic5} alt="" />

      </div>
    </Slider>
  );
}