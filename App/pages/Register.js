import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Header/Navbar';
import Credentials from '../Body/Credentials';
import Address from '../Body/Address';
import MyFooter from '../Footer/MyFooter';
import './index.css';

class Register extends Component {
	constructor(props) {
    super(props);
    this.state = {
      FirstName:'',
      LastName:'',
      Email:'',
      Password:'',
      Pass:'',
      Address:'',
      State:'',
      City:'',
      Zip:'',
      interest1:'',
      interest2:'',
      array:[]                    
    };
    this.onHandleChange=this.onHandleChange.bind(this);
    this.Click=this.Click.bind(this);
    this.Reset=this.Reset.bind(this);
    this.submitData = this.submitData.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  componentWillUpdate(prevProps) {
    console.log('will update');
  }

  componentDidUpdate(prevProps) {
    console.log('did update');
  }

  onHandleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    });
  }

  Reset() {
    console.log("hey");
    this.setState({
      array:[],
    })
    this.Click();
  }

  Click() {
   console.log("hello", this.state.array);
   this.setState({
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    Pass:'',
    Address:'',
    State:'',
    City:'',
    Zip:'',
    //array:[],
  })
 }

 validatePassword() {
  let Password=this.state.Password
  let Pass=this.state.Pass
  if( Password === Pass) {
    return this.state.Password
  } else {
    return false;
  }
 }
 submitData(e) {
    e.preventDefault();
      if(!this.validatePassword()) {
        console.log("password don't match");
        return false;
      } else {
        console.log('Going to get data');
        axios({
          method:'POST',
        url: 'http://localhost:8080/register',
        data: {
        firstName: this.state.FirstName,
        lastName: this.state.LastName,
        email: this.state.Email,
        password: this.state.Password,
        address: this.state.Address,
        city: this.state.City,
        state: this.state.State,
        zip: parseInt(this.state.Zip,10),
              }
 }).then(res => {
  console.log('Response = ', res);
  }).catch(err => {
  console.log('Error happened', err);
}).finally(() => {
  console.log('Done with api call');
    });
  }
}

  render() {
     console.log(this.state);
    return (
      <div className="signin">
      <Navbar />
    	
    	   
         <h1 className="heading2">Sign up</h1>
        
    	<form className="demoForm" onSubmit={e => this.submitData(e)}>
     <br />

       <Credentials
    		  onHandleChange={e => this.onHandleChange(e)} 
    	 	  FirstName={this.state.FirstName}
   			  LastName={this.state.LastName}
    		  Email={this.state.Email}
    		  Password={this.state.Password}
          Pass = {this.state.Pass}
        />

       <Address 
         onHandleChange={e => this.onHandleChange(e)}
   			 Address={this.state.Address}
   			 State={this.state.State}
   			 City={this.state.City}
   			 Zip={this.state.Zip}
        />

      <MyFooter
	     	Click={this.Click}
    		FirstName={this.state.FirstName}
    		LastName={this.state.LastName}
   			Email={this.state.Email}
    		Password={this.state.Password}
   			submitData={this.submitData}
    		Reset={this.Reset}
      />
  	   
       </form>

  	 
     </div>
    );
  }
}
export default Register;