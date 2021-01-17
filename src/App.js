import React, { useState } from 'react';
import './App.css';
import './css/Todo.css';
import shortid from 'shortid';

// components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
	const todoList = [
		{
			id: shortid.generate(),
			text: 'Noelle',
			isCompleted: false,
		},
		{
			id: shortid.generate(),
			text: 'Yuno',
			isCompleted: true,
		},
		{
			id: shortid.generate(),
			text: 'Hinata',
			isCompleted: true,
		},
	];
	const [todo, setTodo] = useState(todoList);
	const [editingValue, setEditingValue] = useState('');

	function addNewTodo(todoItem) {
		const newTodo = {
			id: shortid.generate(),
			...todoItem,
		};

		const newTodoList = [...todo];
		newTodoList.push(newTodo);
		setTodo(newTodoList);
	}

	function getIdEditing(id) {
		setEditingValue(id);
	}

	function editTodoItem(todoItem, index) {
		if (index >= 0) {
			const newTodo = [...todo];
			console.log(index);
			console.log(todoItem);
			newTodo.splice(index, 1, todoItem);
			setTodo(newTodo);
			setEditingValue('');
		}
	}

	return (
		<div className="todoapp">
			<Header onSubmit={addNewTodo} />
			<TodoList
				todoList={todo}
				getTodoEditingId={getIdEditing}
				idEditing={editingValue}
				onEditTodo={editTodoItem}
			/>
			<Footer />
		</div>
	);
}

export default App;
