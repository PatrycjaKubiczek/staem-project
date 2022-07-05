import { Typography } from "@mui/material";

const Heading = ({ children }: any) => {
	return (
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
			{children}
		</Typography>
	);
};
export default Heading;
