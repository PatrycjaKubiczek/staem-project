import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/material";
import { useState } from "react";

const SearchBox = styled(InputUnstyled)({
	"& input": {
		backgroundColor: "#1A3A53",
		borderRadius: "25px",
		color: "white",
		padding: "10px",
		border: "1px solid transparent",
		"&:hover": {
			background: "#214b6b",
		},

		"&:focus-visible": {
			outline: 0,
			border: "1px solid #214b6b",
		},
	},
	"& ::placeholder": {
		color: "white",
	},
});

const Search = (props: any) => {
	const { searchQuery, onChange, search } = props;

	return (
		<SearchBox
			id="standard-basic"
			placeholder="Search"
			color="primary"
			value={searchQuery}
			onChange={onChange}
		/>
	);
};

export default Search;
