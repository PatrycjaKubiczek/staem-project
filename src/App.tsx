import "./App.css";

import { Container } from "@mui/material";
import GameList from "./pages/GameList";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<GameList />
		</>
	);
}

export default App;
