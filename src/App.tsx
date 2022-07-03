import "./App.css";

import { Container } from "@mui/material";
import GameList from "./pages/components/GameList";
import Header from "./pages/components/Header";

function App() {
	return (
		<Container style={{ marginTop: "30px" }}>
			<Header />
			<GameList />
		</Container>
	);
}

export default App;
