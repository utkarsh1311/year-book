import me from "../assets/ME.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import share from "../assets/share.svg";
import mail from "../assets/mail.svg";

const Profile = () => {
	return (
		<div className="flex flex-col p-4 bg-gray-900 text-white gap-6 relative">
			<img
				src={share}
				className="absolute right-5 top-5"
				alt="share icon"
			/>
			<div className="w-28 h-28 bg-blue-600">
				<img
					className="w-28 h-28"
					src={me}
					alt=""
				/>
			</div>
			<div>
				<h2 className="text-4xl font-bold">Utkarsh Maurya</h2>
				<p className="text-sm">CS 3rd year</p>
				<p className="leading-tight opacity-80 mt-2">
					I am a self-taught web developer with a strong eye for innovative
					design and a keen understanding of techniques geared toward optimum
					user experience.
				</p>
			</div>
			<div className="flex gap-4 mt-2">
				<a href="www.github.com/utkarsh1311">
					<img
						src={github}
						alt=""
					/>
				</a>
				<a href="https://linkedin.com/utkarsh-mam">
					<img
						src={linkedin}
						alt="linkedin icon"
					/>
				</a>
				<a href="www.github.com/utkarsh1311">
					<img
						src={twitter}
						alt="twitter icon"
					/>
				</a>
				<a href="www.github.com/utkarsh1311">
					<img
						src={mail}
						alt="mail icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default Profile;
