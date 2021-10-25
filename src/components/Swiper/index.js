import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation";
import "swiper/components/pagination";
import "./swiper.scss";
import Card from "../Card";

SwiperCore.use([Navigation]);

const Results = ({ results }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={-10}
      slidesPerGroup={5}
      loop={false}
      loopFillGroupWithBlank={false}
      navigation={true}
      className="mySwiper"
      preventClicks={true}
      breakpoints={{
        1253: {
          slidesPerView: 5,
          slidesPerGroup: 4,
        },
        940: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        730: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        200: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}
    >
      {results.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Results;
