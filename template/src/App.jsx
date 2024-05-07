import React from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-6xl font-bold mb-4 text-center text-accent-content">
				Project Title
			</h1>
			<FirstComponent />
		</div>
	);
};

export default App;
