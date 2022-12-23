import Resource from "./Resource";

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
];



const YearList = () => {
	return (
		<div className="p-4 bg-gray-900 h-auto flex flex-col gap-4">
			{books.map(book => (
				<Resource
					title={book.title}
					description={book.description}
					time={book.time}
				/>
			))}
		</div>
	);
};

export default YearList;
