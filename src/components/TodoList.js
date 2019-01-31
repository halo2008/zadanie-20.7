import React from 'react';
import style from '../containers/TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.clickItem = this.clickItem.bind(this);
	}

	clickItem(clickedItem){
		this.props.onClick(clickedItem);
	}

	render() {
		const taskNames = this.props.tasks.map(task => {
			return (
			<div className={style.todoText} key={task.id} onClick={() => this.clickItem(task.id)}>
				{task.text}
			</div>
		)});
		return (
			<div>
				To do:
				<div>
					{taskNames}
				</div>
			</div>
		)
	}
}
export default TodoList;
