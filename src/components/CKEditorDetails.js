import React from 'react';
import { useCkEditorDetailsContext } from '../contexts/ckEditorDetailsContext';
import SingleCKEditorDetails from './SingleCKEditorDetails';

const CKEditorDetails = () => {
	const { details } = useCkEditorDetailsContext();
	return (
		<div>
			{details.map((singleDetails) => (
				<SingleCKEditorDetails
					key={singleDetails.id}
					singleDetails={singleDetails}
				/>
			))}
		</div>
	);
};

export default CKEditorDetails;
