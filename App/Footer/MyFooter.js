import React from 'react';
import './footer.css';

const MyFooter = ({Reset,Click,submitData,errorMsg}) => (
	
	<div className="form-actions">
		<button type="button" className="btn btn-danger" onClick={Reset}>Reset</button>
		<button type="submit" className="btn btn-primary">Submit</button>
		</div>
	);

	export default MyFooter;



