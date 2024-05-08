import React, { useState } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

const PeopleTable = () => {
	const [data, setData] = useState([
		[
			"Juan Pérez",
			"Av. Libertador 123, Santiago",
			"+56912345678",
			"12.345.678-9",
			"Masculino",
			true,
		],
		[
			"María González",
			"Calle Ahumada 456, Valparaíso",
			"+56987654321",
			"98.765.432-1",
			"Femenino",
			false,
		],
		[
			"Pedro Sánchez",
			"Av. Providencia 789, Santiago",
			"+56955554444",
			"11.222.333-4",
			"Masculino",
			true,
		],
		[
			"Carla Ramírez",
			"Calle Valdivia 321, Concepción",
			"+56977778888",
			"44.555.666-7",
			"Femenino",
			true,
		],
		[
			"Diego Torres",
			"Av. Alemania 654, Temuco",
			"+56911112222",
			"77.888.999-0",
			"Masculino",
			false,
		],
		[
			"Fernanda Castro",
			"Calle Arturo Prat 987, Antofagasta",
			"+56933334444",
			"22.333.444-5",
			"Femenino",
			true,
		],
		[
			"Andrés López",
			"Av. Matta 741, Santiago",
			"+56955556666",
			"66.777.888-9",
			"Masculino",
			true,
		],
		[
			"Valentina Herrera",
			"Calle Baquedano 159, Iquique",
			"+56977778888",
			"99.000.111-2",
			"Femenino",
			false,
		],
		[
			"Javier Muñoz",
			"Av. O'Higgins 753, Rancagua",
			"+56922223333",
			"33.444.555-6",
			"Masculino",
			true,
		],
		[
			"Camila Rojas",
			"Calle San Martin 951, Talca",
			"+56944445555",
			"88.999.000-1",
			"Femenino",
			true,
		],
		[
			"Gabriel Díaz",
			"Av. Colón 741, La Serena",
			"+56966667777",
			"55.666.777-8",
			"Masculino",
			false,
		],
		[
			"Isidora Vega",
			"Calle Bulnes 852, Punta Arenas",
			"+56922223333",
			"11.222.333-4",
			"Femenino",
			true,
		],
		[
			"Daniel Ortega",
			"Av. Bernardo O'Higgins 753, Arica",
			"+56944445555",
			"44.555.666-7",
			"Masculino",
			true,
		],
		[
			"Florencia Ríos",
			"Calle Arturo Prat 654, Valdivia",
			"+56966667777",
			"77.888.999-0",
			"Femenino",
			false,
		],
		[
			"Sebastián Molina",
			"Av. Pedro Montt 321, Puerto Montt",
			"+56988889999",
			"22.333.444-5",
			"Masculino",
			true,
		],
		[
			"Javiera Torres",
			"Calle Balmaceda 456, Copiapó",
			"+56955556666",
			"66.777.888-9",
			"Femenino",
			true,
		],
		[
			"Matías Soto",
			"Av. Chacabuco 789, Concepción",
			"+56977778888",
			"99.000.111-2",
			"Masculino",
			false,
		],
		[
			"Antonella Castro",
			"Calle Lautaro 159, Osorno",
			"+56922223333",
			"33.444.555-6",
			"Femenino",
			true,
		],
		[
			"Cristóbal Vega",
			"Av. Manuel Rodríguez 951, Talca",
			"+56944445555",
			"88.999.000-1",
			"Masculino",
			true,
		],
		[
			"Constanza Herrera",
			"Calle Freire 753, Rancagua",
			"+56966667777",
			"55.666.777-8",
			"Femenino",
			false,
		],
	]);

	const hotSettings = {
		data,
		colHeaders: [
			"Nombre",
			"Dirección",
			"Celular",
			"RUT",
			"Género",
			"Estado",
		],
		columns: [
			{ type: "text" },
			{ type: "text" },
			{ type: "numeric" },
			{ type: "text" },
			{
				type: "dropdown",
				source: ["Masculino", "Femenino", "Otro"],
			},
			{
				type: "checkbox",
				className: "text-center align-middle",
			},
		],
		stretchH: "all",
		className: "text-center align-middle",
		licenseKey: "non-commercial-and-evaluation",
		height: "auto",
	};

	return (
		<div className="m-4">
			<h2 className="text-2xl font-bold mb-4">Tabla de Personas</h2>
			<HotTable
				settings={hotSettings}
				className="bg-white shadow-md rounded-md"
			/>
		</div>
	);
};

export default PeopleTable;
