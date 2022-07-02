import { Box, Button, Typography } from "@mui/material";

import Search from "./components/Search";
import Select from "./components/Select";

const Header = () => {
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
					style={{
						color: "white",
						textTransform: "uppercase",
						fontWeight: "bold",
					}}
				>
					Staem
				</Typography>
				{/* image carousel */}
				<Button
					variant="contained"
					style={{
						backgroundColor: "#214B6B",
						borderRadius: "100px",
					}}
				>
					install
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Typography
					variant="h5"
					component="div"
					gutterBottom
					style={{
						color: "white",
						width: "500px",
						marginRight: "-100px;",
					}}
					className="title-line"
				>
					New & Trending
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Search />

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<p>Sort by:</p>
					<Select />
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
