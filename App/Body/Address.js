import React from 'react';

const Address = ({onHandleChange, Address, State, City, Zip}) => (

<div className="container">
	<div className="form-group">
		<input type="text" 
				class="form-control" 
				name="Address" 
				placeholder="Address"
				value={Address} 
				onChange={(e) => onHandleChange(e)}
				title="Enter valid address"
				pattern="[A-Za-z0-9]{1,20}"
				required
			/>
	</div>

	<div className="form-row">
		<div className="form-group col-md-4">
				<input type="text" 
					className="form-control" 
					placeholder="City"
					name="City" 
					value={City} 
					onChange={(e) => onHandleChange(e)} 
					pattern="[A-Za-z]{1,10}"
					required
				/>
		</div>

		<div class="form-group col-md-4">
				<input type="text" 
					className="form-control" 
					placeholder="State"
					name="State" 
					value={State} 
					onChange={(e) => onHandleChange(e)}
					pattern="[A-Za-z]{1,10}"
					required
				/>
		</div>

		<div className="form-group col-md-4">
				<input type="text" 
					class="form-control"
					placeholder="Zip" 
					name="Zip" 
					value={Zip} 
					onChange={(e) => onHandleChange(e)}
					pattern="[0-9]{6}"
					title="six digit pin code"
					required
				/>
		</div>
	</div>
</div>
);
	
export default Address;

