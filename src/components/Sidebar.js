import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<aside className='text-light position-fixed'>
			<p>
				<Link to='/fullForm'>Full Form</Link>
			</p>
			<p>
				<Link to='/listOfFormDetails'>List Of Form Details</Link>
			</p>
			<p>
				<Link to='/CKEditor'>CKEditor</Link>
			</p>
			<p>
				<Link to='/CKEditorDetails'>CKEditor Details</Link>
			</p>
		</aside>
	);
};

export default Sidebar;
