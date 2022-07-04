import { FormControl, MenuItem, Select } from "@mui/material";

import { styled } from "@mui/system";

const StyledSelect = styled(Select)`
	background: #1a3a53;
	border-radius: 2em;
	border: 0;
	min-width: 320px;
	color: white;
	&:hover {
		background: #214b6b;
		outline: 0;
	}
	& svg {
		color: white;
	}
`;

const CustomSelect = (props: { onChange: any; filteredValue: any }) => {
	const { onChange, filteredValue } = props;

	return (
		<FormControl fullWidth>
			<StyledSelect
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={filteredValue}
				onChange={onChange}
				MenuProps={{
					PaperProps: {
						sx: {
							bgcolor: "#17202D",
							color: "white",
							"& .MuiMenuItem-root": {
								borderRadius: "25px",
								margin: "8px",
							},
						},
					},
				}}
			>
				<MenuItem value={"price"}>Price</MenuItem>
				<MenuItem value={"name"}>Name</MenuItem>
			</StyledSelect>
		</FormControl>
	);
};
export default CustomSelect;
