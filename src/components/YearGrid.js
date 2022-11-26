const YearGrid = () => {
	return (
		<div className="grid grid-cols-2 bg-gray-800 p-4 gap-4">
			<a
				href="#home"
				className="bg-red-200 aspect-square text-5xl grid items-center text-center font-bold">
				I
			</a>
			<a
				href="#about"
				className="bg-red-200 aspect-square text-5xl grid items-center text-center font-bold">
				II
			</a>
			<a
				href="#contact"
				className="bg-red-200 aspect-square text-5xl grid items-center text-center font-bold">
				III
			</a>
			<a
				href="#profile"
				className="bg-red-200 aspect-square text-5xl grid items-center text-center font-bold">
				IV
			</a>
		</div>
	);
};

export default YearGrid;
