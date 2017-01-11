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
		const taskStyle = { color: isCompleted ? 'green' : 'red', 
							cursor: 'pointer', }

		if(this.state.isEditing){
			return (<td>
						<form onSubmit={this.onSaveClick.bind(this)}>
							<input type="text" defaultValue={task} ref="editInput"/>
						</form>
				    </td>);
		}

		return (
				<td style = {taskStyle} onClick={ this.props.onComplete.bind(this, task) }> { task } </td>
		);
	}

	renderActionsSection(){
		if(this.state.isEditing){
			return (
			<td>
				<button onClick={this.onSaveClick.bind(this)}>Save</button>
				<button onClick={this.toggleEdit.bind(this)}>Cancel</button>
			</td>
			);
		}

		return (
			<td>
				<button onClick={this.toggleEdit.bind(this)} class="">Edit</button>
				<button onClick={() => this.props.onDelete(this.props.task)} class="">Delete</button>
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