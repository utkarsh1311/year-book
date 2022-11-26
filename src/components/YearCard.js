const YearCard = () => {
	return (
		<div className="font-primary bg-gray-900 px-4 py-8 text-white relative">
			<h2 className="absolute font-bold text-[10rem] opacity-20 bottom-[-2rem] tracking-tighter right-2 m-0">
				III
			</h2>
			<div className="">
				<p className="text-3xl font-bold">Subjects:</p>
				<ul className="mt-4">
					<li>Programming with Problem Solving</li>
					<li>Physics</li>
					<li>Engineering mathematics I</li>
					<li>Electronics</li>
					<li>Soft Skills</li>
				</ul>
			</div>
		</div>
	);
};

export default YearCard;
