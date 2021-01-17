import React, { memo, useState } from 'react';

const Todo = memo((props) => {
	const { todo, getTodoEditingId, idEditing, onEditTodo, index } = props;
	const [todoItem, setTodoItem] = useState(todo.text);
	const isEditing = idEditing === todo.id;
	function getIdEditing(id) {
		getTodoEditingId(id);
		console.log(idEditing);
	}

	function handleEditing() {
		onEditTodo(
			{
				...todo,
				text: todoItem,
			},
			index
		);
	}
	return (
		<li
			className={`${isEditing ? 'editing' : ''} ${
				todo.isCompleted ? 'completed' : ''
			}`}
		>
			{!isEditing ? (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.isCompleted}
					/>
					<label onClick={() => getIdEditing(todo.id)}>{todo.text}</label>
					<button className="destroy"></button>
				</div>
			) : (
				<form onSubmit={handleEditing}>
					<input
						className="edit"
						type="text"
						value={todoItem}
						onChange={(e) => setTodoItem(e.target.value)}
						onBlur={handleEditing}
					/>
				</form>
			)}
		</li>
	);
});

export default Todo;
