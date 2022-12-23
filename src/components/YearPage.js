import Navbar from "./Navbar";
import YearCard from "./YearCard";
import YearList from "./YearList";
const YearPage = () => {
	return (
		<div className="bg-gray-900 h-full relative">
			<Navbar />
			<YearCard />
			<YearList />
		</div>
	);
};

export default YearPage;
