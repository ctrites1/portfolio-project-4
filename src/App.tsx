import "./App.css";
import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
import TopCards from "./components/TopCards";
import MenuGrid from "./components/MenuGrid";
import TabMenu from "./components/TabMenu";

function App() {
	return (
		<div
			className="font-sans min-h-screen pb-16"
			style={{
				fontFamily: "Nunito, Avenir Next Rounded, system-ui, sans-serif",
			}}
		>
			<AppBar username="Christine" />
			{/* <Hero /> */}
			<TopCards />
			<MenuGrid />
			<TabMenu />
		</div>
	);
}

export default App;
