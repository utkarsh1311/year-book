const YearGrid = () => {
	return (
		<div className="grid grid-cols-2 text-white bg-gray-900 p-4 gap-4">
			<a
				href="#home"
				className="bg-gray-800 aspect-square text-5xl grid items-center text-center font-bold md:aspect-[3/1]">
				I
			</a>
			<a
				href="#about"
				className="bg-gray-800 aspect-square text-5xl grid items-center text-center font-bold md:aspect-[3/1]">
				II
			</a>
			<a
				href="#contact"
				className="bg-gray-800 aspect-square text-5xl grid items-center text-center font-bold md:aspect-[3/1]">
				III
			</a>
			<a
				href="#profile"
				className="bg-gray-800 aspect-square text-5xl grid items-center text-center font-bold md:aspect-[3/1]">
				IV
			</a>
		</div>
	);
};

export default YearGrid;
