import "./App.css";

import { Container } from "@mui/material";
import Header from "./pages/Header";
import Item from "./pages/components/Item";

function App() {
	return (
		<Container style={{ marginTop: "30px" }}>
			<Header />
			<Item />
			<Item />
			<Item />
		</Container>
	);
}

export default App;
