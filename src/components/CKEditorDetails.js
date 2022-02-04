import React from 'react';
import { useCkEditorDetailsContext } from '../contexts/ckEditorDetailsContext';
import SingleCKEditorDetails from './SingleCKEditorDetails';

const CKEditorDetails = () => {
	const { details } = useCkEditorDetailsContext();
	return (
		<div>
			<div className='row'>
				{details.map((singleDetails) => (
					<SingleCKEditorDetails
						key={singleDetails.id}
						singleDetails={singleDetails}
					/>
				))}
			</div>
		</div>
	);
};

export default CKEditorDetails;
