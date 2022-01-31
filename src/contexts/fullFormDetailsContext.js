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
		axios.get('http://localhost:5000/').then((response) => {
			setDetails(response.data);
		});
	}, []);

	const deleteItem = (id) => {
		// ===== delete data in MySql Database
		axios
			.post('http://localhost:5000/delete', { deleteId: id })
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
			.put('http://localhost:5000/update/files', finalFileData)
			.then(async (response) => {
				console.log(response);
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
			.put('http://localhost:5000/update', finalData)
			.then((response) => {
				console.log(response);
			});

		// setDetails(details);
	};

	const insertItem = () => {
		axios.get('http://localhost:5000/').then((response) => {
			setDetails(response.data);
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
