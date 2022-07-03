import { Box, Button, Typography } from "@mui/material";

import Carousel from "./Carousel";

const Header = () => {
	return (
		<Box className="header">
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
			<Box>
				<Carousel />
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
						marginRight: "-100px",
					}}
					className="title-line"
				>
					New & Trending
				</Typography>
			</Box>
		</Box>
	);
};

export default Header;
