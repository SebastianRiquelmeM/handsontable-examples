import React from "react";
import PeopleTable from "./components/PeopleTable";
import BasicExample from "./components/BasicExample";

const App = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-6xl font-bold mb-4 text-center text-accent-content">
				Project Title
			</h1>
			<BasicExample />
			<PeopleTable />
		</div>
	);
};

export default App;
