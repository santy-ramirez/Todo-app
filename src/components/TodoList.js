import React from 'react';


class TodoList extends React.Component{

	render(){

		return(
			<div>
				<ul className="card-body">
					{this.props.items.map(item =>(
					<li className= "card-text" key ={item.id}>{item.text}</li>))}
				</ul>
			</div>
			);
		}
}

export default TodoList;