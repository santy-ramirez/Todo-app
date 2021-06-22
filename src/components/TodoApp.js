import React from 'react';
import TodoList from './TodoList'



class TodoApp extends React.Component{
	constructor(props){
		super(props);
		this.state ={items:[],text:""};
		this.headleSubmit = this.headleSubmit.bind(this);
		this.headleChange = this.headleChange.bind(this);

	}


	headleSubmit(e){
		e.preventDefault();
		if(this.state.text.length === 0){
			return;
		}
		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			text:''
		}));
	}

	headleChange(e){
		this.setState({text: e.target.value});
	}


	render(){
		return(
			<div className= "col">
				<h2>tareas pendeientes</h2>
					<form className="form-control" onSubmit ={this.headleSubmit}>
						<label className="col-sm-2 col-form-label "htmlFor="new-todo">
							que necesita hacer
						</label>
						<input 
							id ="new_todo"
							onChange = {this.headleChange}
							value ={this.state.text}
						/>
						<button class="btn btn-primary"> 
						anadir{this.state.length + 1}
						</button>
					</form>
				<TodoList items ={this.state.items}/>
			</div>
			);
	}
}


export default TodoApp;