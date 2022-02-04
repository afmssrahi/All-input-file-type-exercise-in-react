import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parseHtmlReact from 'html-react-parser';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useCkEditorDetailsContext } from '../contexts/ckEditorDetailsContext';

const SingleCKEditorDetails = (props) => {
	const { id, subject, ckEditorData, imgName, imgUrl } = props.singleDetails;

	const [ckEditorDataForModal, setCkEditorDataForModal] = useState('');

	const handleChange = (event, editor) => {
		const data = editor.getData();
		setCkEditorDataForModal(data);
	};

	const { deleteItem, updateItem } = useCkEditorDetailsContext();

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

		const imgName = data.image['0'].name;

		const finalData = {
			...data,
			ckEditorData: ckEditorDataForModal.toString(),
			imgName,
			imgUrl: `http://localhost:5000/${imgName}`,
		};

		console.log(finalData);

		//  update data
		updateItem(finalData, formData);
		setModalShow(false);
	};

	return (
		<div className='col-md-6 mb-5'>
			<div className='card'>
				<h3>Subject: {subject}</h3>
				<img
					src={imgUrl}
					className='card-img-top image-card'
					alt={imgName}
				/>
				<div className='card-body'>
					<hr />
					<h3 className='text-danger'>
						Without Parsing CkEditor Data
					</h3>
					{ckEditorData}
					<hr />
					<h3 className='text-success'>Parse CkEditor Data</h3>
					{parseHtmlReact(ckEditorData)}
				</div>
				<div className='card-footer'>
					<button
						className='btn btn-danger'
						onClick={() => handleDelete(id)}
					>
						Delete
					</button>
					<button
						className='btn btn-warning text-white ms-2'
						onClick={() => handleModalShowForUpdate(id)}
					>
						Update
					</button>
				</div>
			</div>

			{/* ============================================
				Modal For Update CKEditor Data Details 
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
						<label className='form-label'>Subject:</label>
						<input
							className='form-control'
							type='text'
							{...register('subject', { required: true })}
						/>
						{errors.subject && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						<br />
						{/* CKEditor
				=================== */}
						<label className='form-label'>Details:</label>
						<CKEditor
							editor={ClassicEditor}
							data={ckEditorDataForModal}
							onChange={handleChange}
							config={{
								toolbar: [
									'heading',
									'|',
									'bold',
									'italic',
									// 'link',
									'bulletedList',
									'numberedList',
									'|',
									'outdent',
									'indent',
									'|',
									// 'imageUpload',
									'blockQuote',
									'insertTable',
									'mediaEmbed',
									'undo',
									'redo',
								],
								heading: {
									options: [
										{
											model: 'paragraph',
											title: 'Paragraph',
											class: 'ck-heading_paragraph',
										},
										{
											model: 'heading1',
											view: 'h1',
											title: 'Heading 1',
											class: 'ck-heading_heading1',
										},
										{
											model: 'heading2',
											view: 'h2',
											title: 'Heading 2',
											class: 'ck-heading_heading2',
										},
										{
											model: 'heading3',
											view: 'h3',
											title: 'Heading 3',
											class: 'ck-heading_heading3',
										},
										{
											model: 'heading4',
											view: 'h4',
											title: 'Heading 4',
											class: 'ck-heading_heading4',
										},
									],
								},
							}}
						/>
						{errors.details && (
							<p className='text-danger'>
								This field is required
							</p>
						)}
						{/* Input type file for Image
				=================== */}
						<br />
						<label className='form-label'>Image: </label>
						<br />
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
		</div>
	);
};

export default SingleCKEditorDetails;
