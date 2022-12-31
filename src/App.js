// import Navbar from "./components/Navbar";
// import Profile from "./components/Profile";
// import YearGrid from "./components/YearGrid";
import MainPage from "./components/MainPage";
import YearPage from "./components/YearPage";
function App() {
	return (
		<div className="font-primary bg-gray-900 w-screen min-h-screen md:px-16 lg:grid lg:grid-cols-5 ">
			<div className="lg:col-start-2 lg:col-end-5">
				<YearPage />
			</div>
		</div>
	);
}

export default App;
