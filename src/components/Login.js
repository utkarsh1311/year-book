import { useState } from "react";

const Login = () => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});
	return (
		<div className="text-white px-4 py-8">
			<h1 className="text-2xl font-primary tracking-">
				Welcome to the <br />{" "}
				<span className="text-4xl font-extrabold">Year Book</span>
			</h1>
			<form className="flex flex-col my-8 gap-6">
				<label
					htmlFor="username"
					className="flex flex-col text-xl">
					Username
					<input
						className="outline-none h-12 rounded text-black px-2 mb-2"
						type="text"
						name="username"
						id="username"
					/>
				</label>
				<label
					htmlFor="password"
					className="flex flex-col text-xl">
					Password
					<input
						className="outline-none h-12 rounded text-black px-2 mb-2"
						type="password"
						name="password"
						id="password"
					/>
				</label>
				<button className="w-full h-14 bg-gray-800 text-xl font-primary rounded mt-2">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
