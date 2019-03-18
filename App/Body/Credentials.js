import React from 'react';
import './main.css';
const Credentials = ({onHandleChange,FirstName,LastName,Email,Password,Pass}) => (
	
	<div className="container">
		<div className="form-group">
			<div className="form-row">
				<div className="form-group col-md-6">
						<input 
							type="text" 
							name="FirstName" 
							value={FirstName} 
							className="form-control" 
							placeholder="First name" 
							onChange={(e) => onHandleChange(e)} 
							pattern="[A-Za-z]{1,16}" 
							maxlength="16"
							title="Only letters allowed" 
							required
						/>
				</div>
				<div className="form-group col-md-6">
						<input 
							type="text" 
							name="LastName" 
							className="form-control" 
							placeHolder="Last name" 
							value={LastName} 
							onChange={(e) => onHandleChange(e)} 
							pattern="[A-Za-z]*" 
							title="Only letters allowed" 
							required 
						/>
				</div>
			</div>
		</div>
			
	<div className="form-group">
		<div className="form-row">
			<div className="col">
				<input type="text"
					className="form-control" 
					name="Email" 
					placeHolder="Email" 
					value={Email} 
					onChange={(e) => onHandleChange(e)} 
					title="Enter valid email address"
					required 
				/>
			</div>
		</div>
	</div>

				
	<div className="form-group">
		<div className="form-row">
			<div className="form-group col-md-6">
				 <input type="password" 
						className="form-control" 
						name="Password" 
						placeHolder="Password" 
						value={Password} 
						onChange={(e) => onHandleChange(e)} 
						title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
						pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
						required 
					/>
			</div>

			<div className="form-group col-md-6">
				 <input type="password" 
						name="Pass" 
						className="form-control" 
						placeHolder="Confirm Password" 
						value={Pass} 
						onChange={(e) => onHandleChange(e)} 
						title="Password must be same"
						required 
					/>
			</div>
		</div>
	</div>
</div>
);


export default Credentials;