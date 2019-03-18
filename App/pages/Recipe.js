import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

class Recipe extends Component {
	constructor(props) {
	super(props);
	this.state = {
		Title:'',
		Ingredients:[],
		Instructions:[],
		isRecipeFetched: false,
		recipeData:[],
	};
	this.onHandleChange=this.onHandleChange.bind(this);
	this.addRecipe=this.addRecipe.bind(this);
	this.Reset=this.Reset.bind(this);
	this.displayRecipe=this.displayRecipe.bind(this);
	this.showRecipe=this.showRecipe.bind(this);
}

componentWillMount(){
	console.log(this.state.dummyData);
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
		Title:'',
		Ingredients:'',
		Instructions:'',
	})
}

displayRecipe(e) {
     console.log('Going to display recipes');
      axios({
        method:'GET',
        url: 'http://localhost:8080/recipe',
}).then(res => {
  console.log('Response = ', res.data);
  this.setState({
  	recipeData: res.data,
  	isRecipeFetched: true,
   });
}).catch(err => {
  	console.log('Error happened', err);
}).finally(() => {
	console.log(this.state.recipeData);
  console.log('Done with Api call');
    });
this.Reset();
}

addRecipe(e) {
  	e.preventDefault();
     console.log('Going to add a recipe');
      axios({
        method:'POST',
        url: 'http://localhost:8080/recipe',
        data: {
        Title: this.state.Title,
        Ingredients: this.state.Ingredients,
        Instructions: this.state.Instructions,
        }
 }).then(res => {
  console.log('Response = ', res);
}).catch(err => {
  	alert("Recipe not added");
  console.log('Error happened', err);
}).finally(() => {
		console.log('Done with Api call');
		this.displayRecipe();
});
this.Reset();
this.showRecipe();
}

showRecipe() {
return (
  Object.keys(this.state.recipeData).map((key, index) => {
 	 let eachItem = this.state.recipeData[key];
 	 console.log(`each item ${eachItem}`)
 	 return (
 	 	 	<div className="container">
		   <div className="card">
			   <div className="card-body">
			      <h5 className="card-title">{eachItem.Title}</h5> 
				<hr/>
					<p className="card-text">Ingredients <br/> {eachItem.Ingredients}</p>
						
						<p className="card-text">Instructions <br/> {eachItem.Instructions}</p>
						
						<button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Edit</button>
						<button type="button" className="btn btn-danger">Delete</button>
					</div>
		</div>
	</div>
 	 	);
})
		)
	}

render() {
	return (
<div>
		<nav className="navbar navbar-default justify-content-between">
			<div className="navbar-brand" id="Heading">Recipe box</div>
			<a href="#" className="navbar" id="Add" data-toggle="modal" data-target="#myModal">Add new Recipe</a>
			<form className="form-inline">
				<input className="form-control mr-sm-2" type="search" placeholder="Search Recipe" aria-label="Search" />
			</form>
		</nav>
 {this.showRecipe()}
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">Recipe Details</h4>
         </div>
        <div class="modal-body">
          <p>Title</p>
          <input type="text"
           class="modal-input"
           name="Title" 
           placeholder="Recipe Title" 
           value={this.state.Title}
           onChange={(e) => this.onHandleChange(e)} />

        			<p>Ingredients</p>
	        		<textarea class="modal-input"
	        		name="Ingredients" 
	        		type="Small Text" 
	        		placeholder="Ingredients seperated by commas" 
	        		value={this.state.Ingredients}
	        		onChange={(e) => this.onHandleChange(e)} />
	        	
			        <p>Instructions</p>
			        <textarea class="modal-input"
			        name="Instructions" 
			        type="text" 
			        placeholder="Cooking Instructions" 
			        value={this.state.Instructions}
			        onChange={(e) => this.onHandleChange(e)} />
			        
			    </div>

		       <div class="modal-footer">
		        <button class="btn btn-success modal-btn" onClick={this.addRecipe} data-dismiss="modal">Submit</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		       </div>
      </div>
    </div>
    </div>



	</div>

			);
	}
}

export default Recipe;


