import { MenuItem, TextField } from "@mui/material";

import { useState } from "react";

const filters = [
	{
		value: "price",
		label: "price",
	},
	{
		value: "title",
		label: "title",
	},
	{
		value: "os",
		label: "system",
	},
];
const Select = () => {
	const [filter, setFilter] = useState("price");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};
	return (
		<TextField
			id="outlined-select-filter"
			select
			label="Select"
			value={filter}
			onChange={handleChange}
			size="small"
		>
			{filters.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};

export default Select;
