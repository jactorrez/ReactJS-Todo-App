import React from "react";

export default class TodosListItem extends React.Component {

	constructor(){
		super();
		this.state = {
			isEditing: false
		};
	}

	renderTaskSection(){

		const { task, isCompleted } = this.props; 
		const taskStyle = { color: isCompleted ? '#388E3C' : '#DF5333', 
							cursor: 'pointer', }

		if(this.state.isEditing){
			return (<td>
						<form className="form-inline" onSubmit={this.onSaveClick.bind(this)}>
							<input type="text" defaultValue={task} ref="editInput"/>
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
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.onSaveClick.bind(this)} >Save</button>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.toggleEdit.bind(this)}>Cancel</button>
			</td>
			);
		}

		return (
			<td>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={this.toggleEdit.bind(this)}>Edit</button>
				<button type="button" className="btn btn-default btn-list btn-xs" onClick={() => this.props.onDelete(this.props.task)}>Delete</button>
			</td>
		);
	}

	onSaveClick(event){
		event.preventDefault();
		const oldTask = this.props.task; 
		const newTask = this.refs.editInput.value;
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