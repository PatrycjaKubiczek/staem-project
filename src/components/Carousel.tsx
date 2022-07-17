import "swiper/css";

// Import Swiper styles
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, EffectCoverflow]);

export default function SwiperCoverflow({ games }: any) {
	return (
		<SwiperReact
			pagination={{ clickable: true }}
			spaceBetween={20}
			slidesPerView={3}
			effect="coverflow"
			coverflowEffect={{
				rotate: 0,
				slideShadows: false,
				stretch: 0,
				depth: 150,
			}}
		>
			{games.map((game: any) => (
				<SwiperSlide
					key={game.id}
					style={{
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						backgroundImage: `url(${game.image})`,
					}}
				></SwiperSlide>
			))}
		</SwiperReact>
	);
}
