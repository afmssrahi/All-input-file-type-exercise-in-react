import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FullForm = () => {
	/**
	 * store data in state named viewDetails
	 */
	const [viewDetails, setViewDetails] = useState([]);

	/**===== get all data from MySql Database
	 * ===== and set data into viewDetails array
	 */
	// useEffect(() => {
	// 	axios.get('http://localhost:5000/').then((response) => {
	// 		console.log(response.data);
	// 		setViewDetails(response.data);
	// 	});
	// }, []);

	/**
	 * using react-hook-form for validation
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append('image', data.image['0']);

		const splitFileNameForExtension = data.image['0'].name.split('.'); // splitFileNameForExtension = Array
		const fileExtension =
			splitFileNameForExtension[splitFileNameForExtension.length - 1];

		console.log(fileExtension);
		console.log(data.image['0'].name);
		console.log(data);

		/**===== insert data into MySql Database */

		// for data add into mysql
		// axios
		// 	.post('http://localhost:5000/', {
		// 		...data,
		// 		imgUrl: `http://localhost:5000/${data.image['0'].name}`,
		// 	})
		// 	.then((response) => {
		// 		const newViewDetails = [...viewDetails, response.data];
		// 		setViewDetails(newViewDetails);
		// 	});

		// for image insert into server folder
		// axios
		// 	.post('http://localhost:5000/images', formData, data)
		// 	.then((response) => {
		// 		const newViewDetails = [...viewDetails, response.data];
		// 		setViewDetails(newViewDetails);
		// 	});
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{errors.name && <p>This field is required</p>}
				<label className='form-label'>Name:</label>
				<input
					className='form-control'
					type='text'
					{...register('name', { required: true, maxLength: 80 })}
				/>
				{errors.name && <p>This field is required</p>}
				<label className='form-label'>Title:</label>
				<input
					className='form-control'
					type='text'
					{...register('title', { required: true })}
				/>
				{errors.title && <p>This field is required</p>}
				<label className='form-label'>Paragraph:</label>
				<input
					className='form-control'
					type='text'
					{...register('paragraph', { required: true })}
				/>
				{errors.paragraph && <p>This field is required</p>}
				<label className='form-label'>Url:</label>
				<input
					className='form-control'
					type='url'
					{...register('url', {
						required: true,
						pattern:
							/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
					})}
				/>
				{errors.url && <p>This field is required</p>}
				<label className='form-label'>Location:</label>
				<input
					className='form-control'
					type='text'
					{...register('location', { required: true })}
				/>
				{errors.location && <p>This field is required</p>}
				<label className='form-label'>Country:</label>
				<input
					className='form-control'
					type='text'
					{...register('country', { required: true })}
				/>
				{errors.country && <p>This field is required</p>}
				<label className='form-label'>Public View:</label>
				<div className='form-check'>
					<input
						className='form-check-input'
						{...register('viewPublic', { required: true })}
						type='radio'
						value='yes'
					/>
					<label className='form-check-label'>Yes</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						{...register('viewPublic', { required: true })}
						type='radio'
						value='no'
					/>
					<label className='form-check-label'>No</label>
				</div>
				{errors.viewPublic && <p>This field is required</p>}
				<br />
				<label className='form-label'>Image:</label>
				<input
					type='file'
					alt='image'
					accept='image/*'
					{...register('image', { required: true })}
				/>
				{errors.image && <p>This field is required</p>} <br />
				<input className='btn btn-primary mt-3' type='submit' />
			</form>
		</div>
	);
};

export default FullForm;
