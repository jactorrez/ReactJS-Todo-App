import React from "react";

export default class TodosListItem extends React.Component {

	constructor(){
		super();
		this.state = {
			isEditing: false
		};

		this.onSaveClick = this.onSaveClick.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	renderTaskSection(){
		const { task, isCompleted } = this.props; 
		const taskStyle = { color: isCompleted ? '#388E3C' : '#DF5333', 
							cursor: 'pointer', }

		if(this.state.isEditing){
			return (<td>
						<form className="form-inline" onSubmit={this.onSaveClick}>
							<input type="text" defaultValue={task} ref={(input) => this.editInput = input}/>
						</form>
				    </td>);
		}

		return (
				<td className="todo-item" style={taskStyle} onClick={ this.props.onComplete.bind(this, task) }> { task } </td>
		);
	}

	renderActionsSection(){
		if(this.state.isEditing){
			return (
			<td>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.onSaveClick} >Save</button>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.toggleEdit}>Cancel</button>
			</td>
			);
		}

		return (
			<td>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.toggleEdit}>Edit</button>
				<button type="button" className="btn btn-default btn-list btn-xs btn-danger" onClick={() => this.props.onDelete(this.props.task)}>Delete</button>
			</td>
		);
	}

	onSaveClick(event){
		event.preventDefault();
		const oldTask = this.props.task; 
		const newTask = this.editInput.value;
		this.props.onSave(oldTask, newTask);

		this.toggleEdit();
	}


	toggleEdit(){
		this.setState({
			isEditing: !this.state.isEditing, 
		})
	}

	render(){
		return(
			<tr>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>
		);
	}

}