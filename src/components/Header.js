import React, { memo } from 'react';

const Header = memo((props) => {
	return (
		<header className="header">
			<h1>todos</h1>
			<input className="new-todo" />
		</header>
	);
});

export default Header;
