const Landing = () => {
	return (
		<div className="text-white px-4 py-8 ">
			<h1 className="text-4xl text-center font-bold">Year Book</h1>
			<div className="mt-12 ">
				<p className="first-letter:text-3xl">
					Welcome to <span className="font-extrabold text-lg">Year Book</span> ,
					a web app made for student to share resources that they have collected
					during their college journey.
				</p>

				<p className="mt-12">
					The goal of this app is to promote the collaboration between junior
					and senior student in their studies.
				</p>
			</div>
			<div className="flex flex-col items-center gap-4 mt-12 ">
				<button className="w-full h-10 bg-gray-700 rounded text-xl">Login</button>
				<button className="w-full h-10 bg-gray-700 rounded text-xl">Sign Up</button>
			</div>
		</div>
	);
};

export default Landing;
