import {
	Box,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	Link,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
	styled,
} from "@mui/material";
import { SUPABASE_APIKEY, SUPABASE_AUTHKEY, SUPABASE_URL } from "../../api";
import { useEffect, useState } from "react";

import CustomSelect from "./CustomSelect";
import { GameProps } from "../../types/Games";
import Loader from "./Loader";
import MyCustomSelect from "./MyCustomSelect";
import Paper from "@mui/material/Paper";
import Search from "./Search";
// import Select from "./Select";
import { createClient } from "@supabase/supabase-js";

//styles
const StyledPaper = styled(Paper)({
	"& ": {
		transition: "transform 0.2s ease-out",
		transform: "translate(0, 0)",
	},
	"&:hover": {
		transform: "scale(1.02)",
		transition: "transform 0.2s ease-out",
		cursor: "pointer",
	},
});

//backend
const supabase = createClient(SUPABASE_URL, SUPABASE_APIKEY, {
	headers: {
		Authorization: SUPABASE_AUTHKEY,
	},
});

const GameList = () => {
	type IGames = any;

	const [games, setGames] = useState<IGames>([]);
	const [loading, setLoading] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [filterValue, setFilterValue] = useState("");

	const fetchSteamData = async () => {
		setLoading(true);
		const { data, error } = await supabase
			.from("steam")
			.select("*")
			.limit(30);
		if (error) {
			console.error(error);
		}
		filterGames(data);
		setGames(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchSteamData();
	}, [filterValue]);

	const onSearchQueryChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setSearchValue(e.currentTarget.value);
	};

	const sortByPrice = (games: any[]) => {
		let sortedGamesByPrice = games.sort((a, b) => a.price - b.price);
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

	const filterGames = (games: IGames) => {
		if (filterValue === "price") {
			sortByPrice(games);
		} else if (filterValue === "name") {
			sortByName(games);
		} else {
			return games;
		}
	};

	return (
		<>
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
			{games.length === 0 && loading ? (
				<Loader />
			) : (
				games
					.filter((game: any) => {
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
						}: GameProps) => (
							<Link
								href={link}
								key={`game_${id}`}
								underline="none"
							>
								<StyledPaper
									sx={{
										borderRadius: "10px",
										p: 0,
										margin: "20px auto 50px auto",
										flexGrow: 1,
										backgroundColor: (theme) =>
											theme.palette.mode === "dark"
												? "#1A2027"
												: "#17202D",
										color: "white",
									}}
								>
									<Grid container>
										<Grid
											item
											xs={6}
											style={{
												backgroundImage: `url(${image})`,
												borderTopLeftRadius: "15px",
												borderBottomLeftRadius: "15px",
											}}
										></Grid>
										<Grid item xs={6}>
											<Box
												style={{
													boxSizing: "border-box",
													padding: "30px",
													width: "100%",
												}}
											>
												<Typography
													gutterBottom
													variant="h4"
													component="div"
													style={{
														fontWeight: "bold",
														marginBottom: 0,
													}}
												>
													{title}
												</Typography>
												<Typography
													variant="body2"
													gutterBottom
													style={{ color: "grey" }}
												>
													{genre}
												</Typography>
												<Divider
													style={{
														backgroundColor:
															"#214B6B",
														height: "10px",
														width: "127px",
														left: "650px",
														top: "136px",
														borderRadius: "20px",
														margin: "15px 0 5px 0",
													}}
												/>

												<Typography
													variant="h3"
													component="div"
													style={{
														textAlign: "right",
														fontWeight: "bold",
													}}
												>
													${price}
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</StyledPaper>
							</Link>
						)
					)
			)}
		</>
	);
};

export default GameList;
