import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<div className="container-fluid">
	<div className="navbar-nav">
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<div className="navbar-brand">Menu</div>
	<form className="form-inline">
	<Link to= {'./'}>
	<button className="btn btn-sm btn-dark" type="button">Home</button>
	</Link>
		
	</form>
	</nav>
	</div>
	</div>
	);
	export default Navbar;