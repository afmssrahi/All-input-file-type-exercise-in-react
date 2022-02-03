import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCkEditorDetailsContext } from '../contexts/ckEditorDetailsContext';

const CKEditorComponent = () => {
	const [ckEditorData, setCkEditorData] = useState('');

	const handleChange = (event, editor) => {
		const data = editor.getData();
		setCkEditorData(data);
	};

	const { insertItem } = useCkEditorDetailsContext();

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

		const imgName = data.image['0'].name;

		const allData = {
			...data,
			ckEditorData,
			imgName,
			imgUrl: `http://localhost:5000/${imgName}`,
		};

		/**===== insert data into MySql Database */

		// for ckEditor page image insert into server folder
		axios
			.post('http://localhost:5000/ckeditor/uploads', formData)
			.then((response) => {
				// console.log(response.data);
			});

		// for ckEditor page data add into mysql
		axios
			.post('http://localhost:5000/ckeditor', allData)
			.then((response) => {
				// insert data in the UI
				insertItem();
				console.log(response.data);
			});
	};

	return (
		<div>
			<h1 className='text-center'>This is CkEditor Page</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Input type text
				=================== */}
				<label className='form-label'>Subject:</label>
				<input
					className='form-control'
					type='text'
					{...register('subject', { required: true })}
				/>
				{errors.subject && (
					<p className='text-danger'>This field is required</p>
				)}
				<br />
				{/* CKEditor
				=================== */}
				<label className='form-label'>Details:</label>
				<CKEditor
					editor={ClassicEditor}
					data={ckEditorData}
					onChange={handleChange}
					config={{
						toolbar: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
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
					<p className='text-danger'>This field is required</p>
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
					<p className='text-danger'>This field is required</p>
				)}{' '}
				<br />
				{/* Input type submit
				=================== */}
				<input className='btn btn-primary mt-3' type='submit' />
			</form>
		</div>
	);
};

export default CKEditorComponent;
