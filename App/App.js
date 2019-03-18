import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; 
import Recipe from './pages/Recipe';

class App extends Component {
render() {
	const App = () => (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/recipe' component={Recipe} />
				</Switch>
				</div>
		)
	return (
		<Switch>
		<App/>
		</Switch>
		);
	}
}
 
export default App;