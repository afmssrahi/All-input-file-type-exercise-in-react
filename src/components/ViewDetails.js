import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useFullFormDetailsContext } from '../contexts/fullFormDetailsContext';

const ViewDetails = (props) => {
	const {
		id,
		text,
		tel,
		email,
		password,
		number,
		checkbox,
		color,
		range,
		time,
		week,
		month,
		date,
		dateTimeLocal,
		url,
		radio,
		fileUrl,
		fileName,
		imgUrl,
		imgName,
	} = props.singleDetails;

	// ============= get two function from contextAPI ============
	const { updateItem, deleteItem } = useFullFormDetailsContext();

	const handleDelete = (id) => {
		deleteItem(id);
	};

	// ============== Modal open/close For Update FullForm =======
	const [modalShow, setModalShow] = useState(false);

	const handleModalShowForUpdate = () => setModalShow(true);
	const handleModalClose = () => setModalShow(false);

	/**
	 * using react-hook-form for validation
	 * and update data
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// ======= handleUpdate ============
	const handleUpdate = (data) => {
		const formData = new FormData();
		formData.append('image', data.image['0']);
		formData.append('file', data.file['0']);

		const imgName = data.image['0'].name;
		const fileName = data.file['0'].name;

		const finalData = {
			...data,
			imgName,
			fileName,
			imgUrl: `https://app.vertexesfze.com/${imgName}`,
			fileUrl: `https://app.vertexesfze.com/${fileName}`,
		};

		//  update data
		updateItem(finalData, formData);
		setModalShow(false);
	};

	return (
		<>
			<div className='card'>
				<img
					src={imgUrl}
					className='card-img-top image-card'
					alt={imgName}
				/>
				<div className='card-body'>
					<button
						onClick={() => handleModalShowForUpdate(id)}
						className='btn btn-warning float-end text-light'
					>
						Edit
					</button>
					<button
						onClick={() => handleDelete(id)}
						className='btn btn-danger float-end me-2'
					>
						Delete
					</button>
					<h5>
						<strong>text: </strong>
						{text}
					</h5>
					<h5>
						<strong>tel: </strong>
						{tel}
					</h5>
					<h5>
						<strong>email: </strong>
						{email}
					</h5>
					<h5>
						<strong>password: </strong>
						{password}
					</h5>
					<h5>
						<strong>number: </strong>
						{number}
					</h5>
					<h5>
						<strong>checkbox: </strong>
						{checkbox.toString()}
					</h5>
					<h5>
						<strong>color: </strong>
						{color}
					</h5>
					<h5>
						<strong>range: </strong>
						{range}
					</h5>
					<h5>
						<strong>time: </strong>
						{time}
					</h5>
					<h5>
						<strong>week: </strong>
						{week}
					</h5>
					<h5>
						<strong>month: </strong>
						{month}
					</h5>
					<h5>
						<strong>date: </strong>
						{date}
					</h5>
					<h5>
						<strong>dateTimeLocal: </strong>
						{dateTimeLocal}
					</h5>
					<h5>
						<strong>url: </strong>
						{url}
					</h5>
					<h5>
						<strong>radio: </strong>
						{radio}
					</h5>

					<a href={fileUrl}>Download file: {fileName}</a>
				</div>
			</div>

			{/* ============================================
				Modal For Update fullFormDetails 
			=================================================*/}
			<Modal show={modalShow} onHide={handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update Full Form Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit(handleUpdate)}>
						{/* Input type hidden
				=================== */}
						<input
							className='form-control'
							type='hidden'
							value={id}
							{...register('id', { required: true })}
						/>
						{errors.id && (
							<p className='text-danger'>
								This field is must required
							</p>
						)}
						{/* Input type text
				=================== */}
						<label className='form-label'>Text:</label>
						<input
							className='form-control'
							type='text'
							{...register('text', { required: true })}
						/>
						{errors.text && (
							<p className='text-danger'>
								This field is required and expect text
							</p>
						)}
						{/* Input type tel
				=================== */}
						<label className='form-label'>Tel/phone Number:</label>
						<input
							className='form-control'
							type='tel'
							{...register('tel', {
								required: true,
								pattern: /^[+]?[0-9]{11,15}$/i,
							})}
						/>
						{errors.tel && (
							<p className='text-danger'>
								This field is required and expect tel/phone
								number with 11 digit
							</p>
						)}
						{/* Input type tel
				=================== */}
						<label className='form-label'>Email:</label>
						<input
							className='form-control'
							type='email'
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type password
				=================== */}
						<label className='form-label'>Password:</label>
						<input
							className='form-control'
							type='password'
							{...register('password', { required: true })}
						/>
						{errors.password && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type file for Image
				=================== */}
						<br />
						<label className='form-label'>Image: </label>
						<input
							type='file'
							alt='image'
							accept='image/*'
							{...register('image', { required: true })}
						/>
						{errors.image && (
							<p className='text-danger'>
								This field is required
							</p>
						)}{' '}
						<br />
						{/* Input type Number
				=================== */}
						<label className='form-label'>Number:</label>
						<input
							className='form-control'
							type='number'
							{...register('number', { required: true })}
						/>
						{errors.number && (
							<p className='text-danger'>
								This field is required and expect number
							</p>
						)}
						{/* Input type Checkbox
				=================== */}
						<br />
						<label className='form-label me-2'>Check box: </label>
						<input type='checkbox' {...register('checkbox')} />
						<br />
						{/* Input type Color
				=================== */}
						<label className='form-label'>Color:</label>
						<input
							className='form-control form-control-color'
							type='color'
							{...register('color', { required: true })}
						/>
						{errors.color && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						<br />
						{/* Input type Range
				=================== */}
						<label className='form-label'>Range:</label>
						<input
							className='form-range'
							type='range'
							{...register('range', { required: true })}
						/>
						{errors.range && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type Date
				=================== */}
						<label className='form-label'>Date:</label>
						<input
							className='form-control w-25'
							type='time'
							placeholder='time'
							{...register('time', { required: true })}
						/>
						{errors.time && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type Week
				=================== */}
						<label className='form-label'>Week:</label>
						<input
							className='form-control w-25'
							type='week'
							{...register('week', { required: true })}
						/>
						{errors.week && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type Month
				=================== */}
						<label className='form-label'>Month:</label>
						<input
							className='form-control w-25'
							type='month'
							{...register('month', { required: true })}
						/>
						{errors.month && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type Date
				=================== */}
						<label className='form-label'>Date:</label>
						<input
							className='form-control w-25'
							type='date'
							{...register('date', { required: true })}
						/>
						{errors.date && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type Date Time Local
				=================== */}
						<label className='form-label'>Date Time Local:</label>
						<input
							className='form-control w-28'
							type='datetime-local'
							{...register('dateTimeLocal', { required: true })}
						/>
						{errors.dateTimeLocal && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						<br />
						{/* Input type Url
				=================== */}
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
						{errors.url && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type radio
				=================== */}
						<label className='form-label'>Radio button:</label>
						<div className='form-check'>
							<input
								className='form-check-input'
								{...register('radio', { required: true })}
								type='radio'
								value='yes'
							/>
							<label className='form-check-label'>Yes</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								{...register('radio', { required: true })}
								type='radio'
								value='no'
							/>
							<label className='form-check-label'>No</label>
						</div>
						{errors.viewPublic && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						<br />
						{/* Input type file for Any File
				=================== */}
						<label className='form-label'>File: </label>
						<input
							type='file'
							{...register('file', { required: true })}
						/>
						{errors.file && (
							<p className='text-danger'>
								This field is required
							</p>
						)}{' '}
						<br />
						{/* Input type submit
				=================== */}
						<input
							className='btn btn-warning mt-3 text-light'
							type='submit'
							value='Update'
						/>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ViewDetails;
