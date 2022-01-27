import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<aside className='text-light'>
			<p>
				<Link to='/fullForm'>Full Form</Link>
			</p>
			<p>
				<Link to='/listOfFormDetails'>List Of Form Details</Link>
			</p>
		</aside>
	);
};

export default Sidebar;
