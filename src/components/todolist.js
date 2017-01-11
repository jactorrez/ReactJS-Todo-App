import _ from "lodash";
import React from "react";
import TodoListHead from "./todolist-head";
import TodoListItem from "./todolist-item";


export default class TodosList extends React.Component {

	renderItems(){
		const allPropMethods = {
			onComplete: this.props.onComplete,
			onSave: this.props.onSave,
			onDelete: this.props.onDelete
		}

		return _.map(this.props.todos, (todo, index) => <TodoListItem {...allPropMethods} key={index} {...todo}/>)
	}

	render(){
		return(
			<table className="task-table">
				<TodoListHead/>
				<tbody>
					{ this.renderItems() } 
				</tbody>
			</table>

		);
	}
}