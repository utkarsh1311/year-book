import Resource from "./Resource";
import plus from "../assets/plus.svg";
//generate list of books with thier titles, descriptions, and times as objects
const books = [
	{
		title: "The Hobbit",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Lord of the Rings",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Silmarillion",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Children of Hurin",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Hobbit",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Lord of the Rings",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Silmarillion",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
	{
		title: "The Children of Hurin",
		description: "A hobbit goes on an adventure",
		time: "2 hours",
	},
];

const YearList = () => {
	return (
		<div className="p-4 bg-gray-900 h-auto ">
			<div className="my-4 flex items-center justify-between">
				<h4 className="inline text-3xl text-white font-bold">Resources:</h4>
				<button className="">
					<img
						className="w-10"
						src={plus}
						alt="plus icon"
					/>
				</button>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{books.map(book => (
					<Resource
						title={book.title}
						description={book.description}
						time={book.time}
					/>
				))}
			</div>
		</div>
	);
};

export default YearList;
