import "swiper/css";

// Import Swiper styles
import { Swiper, SwiperOptions } from "swiper";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
	return (
		<SwiperReact
			pagination={{ clickable: true }}
			spaceBetween={0}
			slidesPerView={3}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper: any) => console.log(swiper)}
			style={{ height: "500px", margin: "100px 0" }}
			effect="coverflow"
			coverflowEffect={{
				rotate: 0,
				slideShadows: true,
				stretch: 0,
				depth: 100,
			}}
		>
			<SwiperSlide
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
				}}
			></SwiperSlide>
			<SwiperSlide
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
				}}
			></SwiperSlide>
			<SwiperSlide
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
				}}
			></SwiperSlide>
			<SwiperSlide
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
				}}
			></SwiperSlide>
		</SwiperReact>
	);
}
