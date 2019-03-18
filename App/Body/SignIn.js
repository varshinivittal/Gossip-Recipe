import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

const SignIn = ({Email, Password, onHandleChange, Reset}) => (
<div className="form">
		<div className="form-group">
			<div className="form-row">
				<div className="col">
				 		<input type="text"
							className="form-control" 
							name="Email" 
							placeHolder="Email" 
							value={Email} 
							onChange={(e) => onHandleChange(e)} 
							required 
						/>
				</div>
			</div>
		</div>
	<div className="form-group">
		<div className="form-row">
			<div className="col">
				 <input type="password" 
						className="form-control" 
						name="Password" 
						placeHolder="Password" 
						value={Password} 
						onChange={(e) => onHandleChange(e)} 
						required 
					/>
			</div>
		</div>
	</div>
	<div className="form-actions">
			<button type="button" className="btn btn-danger" onClick={Reset}> Reset</button>
				<button type="submit" className="btn btn-primary">Sign in</button>
				<Link to={'./register'}>
				<button type="button" className="btn btn-info">Create Account</button>
				</Link>
			</div>
			<br/>
</div>
);

export default SignIn;