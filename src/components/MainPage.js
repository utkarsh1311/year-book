import Navbar from "./Navbar";
import Profile from "./Profile";
import YearGrid from "./YearGrid";
const MainPage = () => {
	return (
		<div className="h-screen bg-gray-900">
			<Navbar />
			<Profile />
			<YearGrid />
		</div>
	);
};

export default MainPage;
