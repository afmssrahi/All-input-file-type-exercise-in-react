import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MainCanvas = () => {
	/**
	 * store data in state named viewDetails
	 */
	const [viewDetails, setViewDetails] = useState([]);

	/**===== get all data from MySql Database
	 * ===== and set data into viewDetails array
	 */
	useEffect(() => {
		axios.get('http://localhost:5000/').then((response) => {
			console.log(response.data);
			setViewDetails(response.data);
		});
	}, []);

	console.log(viewDetails);
	return (
		<div>
			<h1>Main Canvas</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto, fuga vitae eaque esse sint deserunt nihil velit vero
				quas, optio reprehenderit ipsum debitis facere voluptate hic
				recusandae rerum omnis enim.
			</p>
		</div>
	);
};

export default MainCanvas;
