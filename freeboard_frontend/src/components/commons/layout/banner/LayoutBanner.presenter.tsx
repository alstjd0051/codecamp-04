import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/developer.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/notebook.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/travel.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
