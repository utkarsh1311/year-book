import share from "../assets/share.svg";

const Resource = ({ title, description, time }) => {
	return (
		<div className="bg-gray-800 rounded-md text-white p-4 relative shadow-md">
			<p className="text-xl font-bold font-primary">{title}</p>
			<p className="text-sm">{description}</p>
      <p className="text-xs">{time}</p>
      <img className="absolute right-4 bottom-4 opacity-30" src={share} alt="share icon" />
		</div>
	);
};

export default Resource;
