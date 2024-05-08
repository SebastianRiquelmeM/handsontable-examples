import React, { useState } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

const BasicExample = () => {
	const [data, setData] = useState([
		["", "Tesla", "Volvo", "Toyota", "Ford"],
		["2019", 10, 11, 12, 13],
		["2020", 20, 11, 14, 13],
		["2021", 30, 15, 12, 13],
	]);

	const hotSettings = {
		data,
		rowHeaders: true,
		colHeaders: true,
		height: "auto",
		licenseKey: "non-commercial-and-evaluation",
	};

	return (
		<div className="m-4">
			<h2 className="text-2xl font-bold mb-4">Basic Example</h2>
			<HotTable
				settings={hotSettings}
				className="bg-white shadow-md rounded-md"
			/>
		</div>
	);
};

export default BasicExample;
