import styles from "./App.module.css";
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';
import { useState, useRef } from 'react';

const todoData = [
	{
		id: 1,
		isDone: false,
		content: '밥먹기',
		//date: new Date().getTime(),
		label: 'todo-1'
	},
	{
		id: 2,
		isDone: false,
		content: '잠자기',
		//date: new Date().getTime(),
		label: 'todo-2'
	},
	{
		id: 3,
		isDone: false,
		content: '영화보기',
		//date: new Date().getTime(),
		label: 'todo-3'
	}
];

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [todos, setTodos] = useState(todoData);
	const [filter, setFilter] = useState('All');
	const idRef = useRef(4);
	const labelRef = useRef(4);

	const createTodo = (content) => {
		const newTodo = {
			id: idRef.current++,
			isDone: false,
			content: content,
			//date: new Date().getTime(),
			label: `todo-${labelRef.current++}`
		};

		setTodos([...todos, newTodo]);
	};

	const checkTodo = (targetId) => {
		setTodos(
			todos.map(todo => 
				todo.id === targetId 
				? {...todo, isDone: !todo.isDone} 
				: todo
			)
		);
	};

	const deleteTodo = (targetId) => {
		setTodos(
			todos.filter(todo => todo.id !== targetId)
		);
	};

	const filteredTodos = todos.filter(todo => {
		switch (filter) {
			case 'All':
				return true;
			case 'Active':
				return !todo.isDone;
			case 'Completed':
				return todo.isDone;
			default:
				return true;
		}
	});

	return (
		<div className={`${styles.wrapper} ${darkMode ? styles.dark : styles.light}`}>
			<div className={styles.container}>
				<Header darkMode={darkMode} setDarkMode={setDarkMode} filter={filter} setFilter={setFilter} />
				<List checkTodo={checkTodo} deleteTodo={deleteTodo} filteredTodos={filteredTodos} />
				<Editor createTodo={createTodo} />
			</div>
		</div>
	);
}

export default App;