import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Teatimonial = () => {
  return (
    <div className="testimonial container section">
      <h2 className="section__title">My Happy Client</h2>
      <span className="section__subtitle">Client Feedback</span>
      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        // slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 50,
          // },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img"/>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Teatimonial;
