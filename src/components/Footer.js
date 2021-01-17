import React, { memo } from 'react';

const Footer = memo((props) => {
	const arrButton = [
		{
			title: 'All',
			isActive: true,
			onClick: () => {},
			link: '',
		},
		{
			title: 'Active',
			isActive: false,
			onClick: () => {},
			link: 'active',
		},
		{
			title: 'Completed',
			isActive: false,
			onClick: () => {},
			link: 'completed',
		},
	];
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>2 </strong>
				<span></span>
				<span>items</span>
				<span> left</span>
			</span>
			<ul className="filters">
				{arrButton.map((btn) => (
					<FilterButton {...btn} key={`btn${btn.title}`} />
				))}
			</ul>
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
});

const FilterButton = memo((props) => {
	const { title, isActive, link, onClick } = props;
	return (
		<React.Fragment>
			<li>
				<a href={link} className={isActive ? 'selected' : ''} onClick={onClick}>
					{title}
				</a>
			</li>
		</React.Fragment>
	);
});

export default Footer;
