import React, { memo, useState } from 'react';

const Header = memo((props) => {
	const { onSubmit } = props;
	const [currentValue, setCurrentValue] = useState('');
	function handleSubmitTodo(e) {
		e.preventDefault();
		if (!onSubmit) return;
		const currentValueChanged = {
			text: currentValue,
			isCompleted: false,
		};
		onSubmit(currentValueChanged);
		setCurrentValue('');
	}
	function handleChangeTodo(e) {
		const value = e.target.value;
		setCurrentValue(value);
	}
	return (
		<header className="header">
			<h1>todos</h1>
			<form onSubmit={handleSubmitTodo}>
				<input className="new-todo" onChange={handleChangeTodo} />
			</form>
		</header>
	);
});

export default Header;
