import _ from "lodash";

import React from "react";

export default class TodosListCreate extends React.Component {

	constructor(){
		super();
		this.state = {
			error: null,
		}

		this.handleCreate = this.handleCreate.bind(this);
	}

	renderError(){
		if(!this.state.error){
			return null;
		}

		return (<div style={{ color: "#DF5333",}}>{ this.state.error }</div>)
	}

	handleCreate(event) {
		event.preventDefault();
		
		const task = this.taskField.value;
		const validateInput = this.validateInput(task);

		if(validateInput){
			this.setState({error: validateInput});
		}

		else{
		this.props.createTask(task);	
		this.taskField.value = '';
		}
		
	}

	validateInput(task){
		if(!task){
			return "Please enter a task";
		} else if(_.find(this.props.todos, todo => todo.task === task)){
			return  "This task already exists";
		} else {
			return null;
		}
	}

	render(){
		return(
			<form className="task-form form-inline" onSubmit={this.handleCreate}>
				<input className="form-control" type="text" placeholder="Add a task!" ref={(input) => this.taskField = input} />
				<input className="btn btn-success" type="submit"/>
				{this.renderError()}
			</form>
		);	
	}

}