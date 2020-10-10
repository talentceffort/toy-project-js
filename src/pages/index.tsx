import React from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

function Home() {
	return (
		<div>
			<TodoInsert />
			<TodoList />
		</div>
	);
}

export default Home;
