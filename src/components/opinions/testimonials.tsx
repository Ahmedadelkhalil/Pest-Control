import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Testimonials Data
import { testimonialData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-center mx-2 text-darkBlue text-4xl md:text-5xl lg:text-6xl tracking-wide">
        آراء <span className="text-lightBlue">العملاء</span>
      </h1>
      <div className="testimonials_container mt-[30px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          slidesPerView={1}
          loop={true}
          cssMode={true}
          className="testimonials_slider bg-darkBlue rounded-lg"
        >
          <>
            {testimonialData?.map((slide, indx) => {
              return (
                <SwiperSlide key={indx}>
                  <div className="testimonials_cardBlock flex flex-col text-white p-7 h-full bg-darkBlue text-[#fff]">
                    <span className="text-5xl">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </span>
                    <p className="text-sm md:text-lg my-7 text-center max-w-[70%] mx-auto">
                      {slide.quote}
                    </p>
                    <hr className="w-[50%] mx-auto" />
                    <div className="guest_info flex items-center my-10">
                      <img
                        src={`${slide.img}`}
                        alt="not-found"
                        className="border border-lightBlue mr-5"
                      />
                      <div className="flex flex-col tracking-wide text-sm">
                        <p>{slide.customer}</p>
                        <p className="capitalize">عميل</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
