import React from 'react';

const ViewDetails = (details) => {
	const {
		name,
		title,
		paragraph,
		url,
		location,
		country,
		viewPublic,
		imgUrl,
	} = details.details;
	return (
		<div>
			<div className='card my-3'>
				<div className='card-body'>
					<h2>Name: {name}</h2>
					<h3>Title: {title}</h3>
					<p>Paragraph: {paragraph}</p>
					<br />
					<h4>Url: {url}</h4>
					<h5>Location: {location}</h5>
					<h5>Country: {country}</h5>
					<p>
						<strong>Public View: {viewPublic}</strong>
					</p>
					<img
						style={{ width: '200px', height: '200px' }}
						src={imgUrl}
						alt='img'
					/>
				</div>
			</div>
		</div>
	);
};

export default ViewDetails;
