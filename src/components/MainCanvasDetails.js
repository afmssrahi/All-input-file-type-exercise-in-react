import React from 'react';
import { useFullFormDetailsContext } from '../contexts/fullFormDetailsContext';
import ViewDetails from './ViewDetails';

const MainCanvasDetails = () => {
	const { details } = useFullFormDetailsContext();

	// handle Delete a form details

	return (
		<div>
			<h1>Details of full of Form</h1>

			{details.map((singleDetails) => (
				<div key={singleDetails.id} className='mt-5'>
					<ViewDetails singleDetails={singleDetails} />
				</div>
			))}
		</div>
	);
};

export default MainCanvasDetails;
