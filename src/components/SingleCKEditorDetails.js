import parseHtmlReact from 'html-react-parser';
import React from 'react';

const SingleCKEditorDetails = (props) => {
	const { id, subject, ckEditorData, imgName, imgUrl } = props.singleDetails;
	console.log(props.singleDetails);

	return (
		<div className='mb-5'>
			<div className='card'>
				<h3>Subject: {subject}</h3>
				<img
					src={imgUrl}
					className='card-img-top image-card'
					alt={imgName}
				/>
				<div className='card-body'>
					{/* <button
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
					</button> */}
					<h3>Without Parsing CkEditor Data</h3>
					{ckEditorData}
					<hr />
					<h3>Parse CkEditor Data</h3>
					{parseHtmlReact(ckEditorData)}
				</div>
			</div>
		</div>
	);
};

export default SingleCKEditorDetails;
