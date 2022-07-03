import * as React from "react";

import OptionUnstyled, {
	optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import SelectUnstyled, {
	SelectUnstyledProps,
	selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";

import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
	100: "#DAECFF",
	200: "#99CCF3",
	400: "#3399FF",
	500: "#007FFF",
	600: "#0072E5",
	900: "#003A75",
};

const grey = {
	100: "#E7EBF0",
	200: "#E0E3E7",
	300: "#CDD2D7",
	400: "#B2BAC2",
	500: "#A0AAB4",
	600: "#6F7E8C",
	700: "#3E5060",
	800: "#2D3843",
	900: "#1A2027",
};

const StyledButton = styled("button")(
	({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#1A3A53"};
  border-radius: 2em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  border: 0;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[300]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : "#214b6b"};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
	color: "#214b6b"
  }
  `
);

const StyledListbox = styled("ul")(
	({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#1A3A53"};
  border-radius: 1em;
  color: ${theme.palette.mode === "dark" ? grey[300] : "#fff"};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : "#fff"};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : "#214b6b"};

  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
	z-index: 1;
`;
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
const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
	props: SelectUnstyledProps<TValue>,
	ref: React.ForwardedRef<HTMLUListElement>
) {
	const components: SelectUnstyledProps<TValue>["components"] = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	};

	return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
	props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
) => JSX.Element;

export default function UnstyledSelectSimple() {
	return (
		<CustomSelect defaultValue={10}>
			{filters.map((option) => (
				<StyledOption key={option.value} value={option.value}>
					{option.label}
				</StyledOption>
			))}
		</CustomSelect>
	);
}
