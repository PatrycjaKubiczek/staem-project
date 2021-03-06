import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/material";

const SearchBox = styled(InputUnstyled)({
	"& input": {
		backgroundColor: "#1A3A53",
		borderRadius: "25px",
		color: "white",
		padding: "10px",
		border: "1px solid transparent",
		width: "203px",
		minHeight: "31px",
		"&:hover": {
			background: "#214b6b",
		},

		"&:focus-visible": {
			outline: 0,
			border: "1px solid #214b6b",
		},
		"@media screen and (max-width: 768px)": {
			marginBottom: "20px",
		},
	},
	"& ::placeholder": {
		color: "white",
	},
});

const Search = (props: any) => {
	const { searchQuery, onChange } = props;

	return (
		<SearchBox
			id="search-bar"
			placeholder="Search"
			color="primary"
			value={searchQuery}
			onChange={onChange}
		/>
	);
};

export default Search;
