import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const fullFormDetailsContext = createContext({
	details: null,
	deleteItem: () => {},
	updateItem: () => {},
	insertItem: () => {},
});

export const FullFormDetailsContextProvider = ({ children }) => {
	/**
	 * store data in state named details
	 */
	const [details, setDetails] = useState([]);

	/**===== get all data from MySql Database
	 * ===== and set data into details array
	 */
	useEffect(() => {
		axios.get('https://app.vertexesfze.com/').then((response) => {
			setDetails(response.data);
		});
	}, []);

	const deleteItem = (id) => {
		// ===== delete data in MySql Database
		axios
			.post('https://app.vertexesfze.com/delete', { deleteId: id })
			.then((response) => {
				// get index for update details in the UI
				const detailsIndex = details.findIndex(
					(post) => post.id === id
				);
				// UPDATE details in UI after deleting
				details.splice(detailsIndex, 1);
				const newDetails = [...details];
				setDetails(newDetails);
			});
	};

	const updateItem = (finalData, finalFileData) => {
		// Update Files in MySql Database
		axios
			.put('https://app.vertexesfze.com/update/files', finalFileData)
			.then(async (response) => {
				// console.log(response);
				// get index for update details in the UI
				const detailsIndex = await details.findIndex(
					(post) => post.id.toString() === finalData.id.toString()
				);
				details[detailsIndex] = await finalData;
				const newDetails = [...details];
				setDetails(newDetails);
			});

		// Update data in MySql Database
		axios
			.put('https://app.vertexesfze.com/update', finalData)
			.then((response) => {
				// console.log(response);
			});

		// setDetails(details);
	};

	const insertItem = () => {
		axios.get('https://app.vertexesfze.com/').then((response) => {
			setDetails(response.data);
			alert('Data Inserted');
		});
	};

	return (
		<fullFormDetailsContext.Provider
			value={{ details, insertItem, deleteItem, updateItem }}
		>
			{children}
		</fullFormDetailsContext.Provider>
	);
};

export const useFullFormDetailsContext = () => {
	const { details, deleteItem, updateItem, insertItem } = useContext(
		fullFormDetailsContext
	);

	return { details, deleteItem, updateItem, insertItem };
};
