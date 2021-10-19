import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation";
import "swiper/components/pagination";
import "./swiper.scss";
import SwiperCore, { Navigation, Pagination, History } from "swiper";

import Card from "../Card";

SwiperCore.use([Navigation, Pagination, History]);
export default ({ results }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={-10}
      slidesPerGroup={5}
      loop={false}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {results.map((item) => (
        <SwiperSlide>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
