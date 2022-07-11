import { Box, Container, SelectChangeEvent } from "@mui/material";
import { SUPABASE_APIKEY, SUPABASE_AUTHKEY, SUPABASE_URL } from "../api";
import { useEffect, useRef, useState } from "react";

import Carousel from "../components/Carousel";
import CustomSelect from "../components/CustomSelect";
import GameItem from "../components/GameItem";
import Heading from "../components/Heading";
import { IGame } from "../types/Games";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import Search from "../components/Search";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_APIKEY, {
	headers: {
		Authorization: SUPABASE_AUTHKEY,
	},
});

const GameList = () => {
	type IGames = IGame[];

	const [games, setGames] = useState<IGames | null>([]);
	const [carouselGames, setCarouselGames] = useState<IGames | null>([]);
	const [loading, setLoading] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [filterValue, setFilterValue] = useState("");
	const [limit, setLimit] = useState(30);
	const loader = useRef(null);

	const fetchSteamData = async () => {
		setLoading(true);
		const { data, error } = await supabase
			.from("steam")
			.select("*")
			.limit(limit);
		if (error) {
			console.error(error);
		}
		filterGames(data);
		if (carouselGames?.length === 0) {
			setCarouselGames(data);
		}

		setGames(data);

		setLoading(false);
	};

	useEffect(() => {
		fetchSteamData();
	}, [filterValue, limit]);

	const handleObserver = (entries: any) => {
		if (entries[0].isIntersecting) {
			setLimit((prev) => prev + 10);
		}
	};

	useEffect(() => {
		const option = {
			root: null,
			rootMargin: "20px",
			threshold: 0,
		};
		const observer = new IntersectionObserver(handleObserver, option);
		if (loader.current) observer.observe(loader.current);
	}, [handleObserver]);

	const onSearchQueryChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setSearchValue(e.currentTarget.value);
	};

	const sortByPrice = (games: any[]) => {
		let sortedGamesByPrice = games.sort((a, b) => a.price - b.price);
		return sortedGamesByPrice;
	};

	const sortByName = (games: any[]) => {
		let sortedGamesByTitle = games.sort((a, b) =>
			a.title.localeCompare(b.title)
		);
		return sortedGamesByTitle;
	};

	const handleSelectChange = (event: SelectChangeEvent) => {
		setFilterValue(event.target.value as string);
	};

	const filterGames = (games: IGame[] | null) => {
		if (games) {
			if (filterValue === "price") {
				sortByPrice(games);
			} else if (filterValue === "name") {
				sortByName(games);
			} else {
				return games;
			}
		}
	};

	return (
		<>
			<Box className="header">
				<Menu />
				<Box>
					<Carousel games={carouselGames} />
				</Box>
			</Box>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<Heading>New & Trending</Heading>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<Search onChange={onSearchQueryChange} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexDirection: "row",
						}}
					>
						<p style={{ color: "white" }}>Sort by:</p>
						<CustomSelect
							onChange={handleSelectChange}
							filteredValue={filterValue}
						/>
					</Box>
				</Box>
				{games?.length === 0 && loading ? (
					<Loader />
				) : (
					games
						?.filter((game: any) => {
							if (searchValue === "") {
								return game;
							} else if (
								game.title
									.toLowerCase()
									.includes(searchValue.toLowerCase())
							) {
								return game;
							}
						})
						.map(
							({
								id,
								title,
								genre,
								image,
								price,
								link,
								platforms,
								tags,
							}: IGame) => (
								<GameItem
									key={id}
									id={id}
									title={title}
									genre={genre}
									image={image}
									price={price}
									link={link}
									platforms={platforms}
									tags={tags}
								/>
							)
						)
				)}
				{!loading && (
					<div ref={loader} style={{ padding: "50px 0" }}>
						<Loader />
					</div>
				)}
			</Container>
		</>
	);
};

export default GameList;
