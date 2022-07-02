import { Box, Divider, styled } from "@mui/material";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
const Item = () => {
	return (
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
						backgroundImage: `url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
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
							style={{ fontWeight: "bold", marginBottom: 0 }}
						>
							Shadow Warrior 3
						</Typography>
						<Typography
							variant="body2"
							gutterBottom
							style={{ color: "grey" }}
						>
							Action, FPS, Adventure, Shooter
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
							style={{ textAlign: "right", fontWeight: "bold" }}
						>
							$19.00
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</StyledPaper>
	);
};

export default Item;
