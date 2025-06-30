import styles from './../App.module.css';
import { useState, useRef } from 'react';

export default function Editor({ createTodo }) {
	const [content, setContent] = useState('');
	const contentRef = useRef();

	const changeContent = (e) => {
		setContent(e.target.value);
	};

	const submitTodo = () => {
		if (content === '') {
			contentRef.current.focus();
			return;
		}
		createTodo(content);
		setContent('');
	};

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			submitTodo();
		}
	};

	return (
		<div className={styles.todoEdit}>
			<input 
				ref={contentRef}
				type="text" 
				placeholder="Add Todo" 
				className={styles.input_add}
				value={content}
				onChange={changeContent}
				onKeyDown={onKeyDown}
			/>
			<button 
				className={styles.btn_add}
				onClick={submitTodo}
			> 
				Add
			</button>
		</div>
	)
}