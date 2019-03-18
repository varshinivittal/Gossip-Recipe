import React, {Component} from 'react';
import MyHeader from '../Header/MyHeader';
import SignIn from '../Body/SignIn';
import axios from 'axios';
import './index.css'; 

class Home extends Component {
	constructor(props) {
		super(props);
		this.state= {
			Email:'',
			Password:'',
		};
		this.onHandleChange=this.onHandleChange.bind(this);
		this.Reset=this.Reset.bind(this);
	}

 onHandleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    });
  }

  Reset() {
  	this.setState({
  		Email:'',
  		Password:'',
  	})
  }

getData(e) {
   e.preventDefault();
     console.log('Going to get data');
      axios({
        method:'POST',
        url: 'http://localhost:8080/',
        data: {
        Email: this.state.Email,
        Password: this.state.Password,
        }
 }).then(() => {
    this.props.history.push('/recipe');
  }).catch(err => {
  	alert("Invalid email or password");
  console.log('Error happened', err);
}).finally(() => {
  console.log('Done with api call');
    });
}

render() {
		return (
<div className="img">
	<MyHeader/>
		<form onSubmit={e => this.getData(e)}>
    <div className="heading">
    <h1>Welcome to Recipe Gossip</h1>
    </div>
			<SignIn
				 Email={this.state.Email}
		 		 Password={this.state.Password}
		 		 Reset={this.Reset}
		 		onHandleChange={e => this.onHandleChange(e)}
		 	/>
		</form>
</div>

					);
				}
			}

export default Home;