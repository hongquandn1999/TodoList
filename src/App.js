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
			text: 'MT',
			isCompleted: false,
		},
		{
			id: shortid.generate(),
			text: 'QT',
			isCompleted: true,
		},
		{
			id: shortid.generate(),
			text: 'KN',
			isCompleted: true,
		},
	];
	const [todo, setTodo] = useState(todoList);

	function addNewTodo(todoItem) {
		const newTodo = {
			id: shortid.generate(),
			...todoItem,
		};

		const newTodoList = [...todo];
		newTodoList.push(newTodo);
		setTodo(newTodoList);
	}

	return (
		<div className="todoapp">
			<Header onSubmit={addNewTodo} />
			<TodoList todoList={todo} />
			<Footer />
		</div>
	);
}

export default App;
