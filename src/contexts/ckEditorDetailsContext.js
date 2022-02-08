import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const ckEditorDetailsContext = createContext({
	details: null,
	deleteItem: () => {},
	updateItem: () => {},
	insertItem: () => {},
});

export const CkEditorDetailsContextProvider = ({ children }) => {
	/**
	 * store data in state named details
	 */
	const [details, setDetails] = useState([]);

	/**===== get all data from MySql Database
	 * ===== and set data into details array
	 */
	useEffect(() => {
		axios.get('https://app.vertexesfze.com/ckeditor').then((response) => {
			setDetails(response.data);
		});
	}, []);

	const deleteItem = (id) => {
		// ===== delete data in MySql Database
		axios
			.post('https://app.vertexesfze.com/ckeditor/delete', {
				deleteId: id,
			})
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
			.put(
				'https://app.vertexesfze.com/ckeditor/update/files',
				finalFileData
			)
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
			.put('https://app.vertexesfze.com/ckeditor/update', finalData)
			.then((response) => {
				// console.log(response);
			});

		// setDetails(details);
	};

	const insertItem = () => {
		axios.get('https://app.vertexesfze.com/ckeditor/').then((response) => {
			setDetails(response.data);
			alert('Data Inserted');
		});
	};

	return (
		<ckEditorDetailsContext.Provider
			value={{ details, insertItem, deleteItem, updateItem }}
		>
			{children}
		</ckEditorDetailsContext.Provider>
	);
};

export const useCkEditorDetailsContext = () => {
	const { details, deleteItem, updateItem, insertItem } = useContext(
		ckEditorDetailsContext
	);

	return { details, deleteItem, updateItem, insertItem };
};
