import {
	Box,
	Divider,
	Grid,
	Link,
	Paper,
	Typography,
	styled,
} from "@mui/material";

import { GameProps } from "../types/Games";

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

const GameItem = ({ link, id, title, genre, image, price }: GameProps) => {
	return (
		<Link href={link} key={`game_${id}`} underline="none">
			<StyledPaper
				sx={{
					borderRadius: "10px",
					p: 0,
					margin: "20px auto 50px auto",
					flexGrow: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === "dark" ? "#1A2027" : "#17202D",
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
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "245px",
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
									backgroundColor: "#214B6B",
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
	);
};

export default GameItem;
