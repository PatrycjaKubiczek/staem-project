import { Box, Button, Container, Typography } from "@mui/material";

const Menu = () => {
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
					paddingTop: "30px",
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
		</Container>
	);
};
export default Menu;
