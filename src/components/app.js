import React from "react";
import TodoListCreate from "./todolist-create"
import TodoList from "./todolist";

export default class App extends React.Component{

	constructor(){
		super();
		this.state = {
			todos: [
						{
							task: "Go on 1 mile run",
							isCompleted: true
						},
						{
							task: "Read for 1 hour",
							isCompleted: false
						},
						{
							task: "Finish making to-do list",
							isCompleted: false
						}
					]
		}

		this.createTask = this.createTask.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.saveTask = this.saveTask.bind(this);
	}

	createTask(task){
		this.state.todos.push({
			task, 
			isCompleted: false
		});

		this.setState({
			todos: this.state.todos,
		});
	}

	toggleComplete(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;

		this.setState({
			todos : this.state.todos 
		});
	}


	saveTask(oldTask, newTask){
		const foundTask = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTask.task = newTask;

		this.setState({
			todos: this.state.todos,
		})
	}

	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({
			todos: this.state.todos,
		})
	}

	render(){
		return (
			<div className="paper">
				<h1>To-do List</h1>
				<TodoListCreate createTask={ this.createTask } todos={ this.state.todos }/> 
				<TodoList onComplete={ this.toggleComplete } onSave={ this.saveTask } onDelete={this.deleteTask.bind(this)} todos={ this.state.todos }/>
			</div>
		);
	}

}