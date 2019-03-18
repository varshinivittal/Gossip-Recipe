import React from 'react';

const Add = () => (
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
           name="title" 
           placeholder="Recipe Title" 
           value={this.state.title}
           onChange={(e) => onHandleChange(e)} />
        			<p>Ingredients</p>
	        		<textarea class="modal-input" 
	        		name="ingredients" 
	        		type="text" 
	        		placeholder="Ingredients seperated by commas" 
	        		value={this.state.ingredients}>
	        		onChange={(e) => onHandleChange(e)} />
	        		</textarea>
			        <p>Instructions</p>
			        <textarea class="modal-input" 
			        name="instructions" 
			        type="text" 
			        placeholder="Cooking Instructions" 
			        value={this.state.instructions}>
			        onChange={(e) => onHandleChange(e)} />
			        </textarea>
			        </div>
		        <div class="modal-footer">
		        <button class="btn btn-success modal-btn">Submit</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        </div>
      </div>
    </div>
  </div>
</div>

);
export default Add;