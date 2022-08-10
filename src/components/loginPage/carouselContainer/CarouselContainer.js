import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./CarouselContainer.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { carouselImagesArray } from "../carouselImagesArray/CarouselImagesArray";

SwiperCore.use([Autoplay, Pagination]);

const CarouselContainer = () => {
	return (
		<div className="carousel__container">
			<Swiper
				modules={[Pagination]}
				spaceBetween={5}
				centeredSlides={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				className="mySwiper"
			>
				{carouselImagesArray.map((image, index) => {
					return (
						<SwiperSlide
							key={`slide-${index}`}
							className="carousel__item"
						>
							<img
								className="carousel__image"
								style={{ listStyle: "none" }}
								src={image.src}
								alt={image.alt}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default CarouselContainer;
