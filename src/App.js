import Landing from "./components/Landing";
function App() {
	return (
		<div className="font-primary selection:text-blue-800 selection:bg-yellow-300 bg-gray-900 w-screen min-h-screen md:px-16 lg:grid lg:grid-cols-5 ">
			<div className="lg:col-start-2 lg:col-end-5">
				<Landing />
			</div>
		</div>
	); 
}
 
export default App;