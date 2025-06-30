import styles from './../App.module.css';
import { ImBin } from "react-icons/im";

export default function List({ checkTodo, deleteTodo, filteredTodos }) {
	return (
		<div className={styles.todoList}>
			<ul>
				{filteredTodos.length === 0 ? (
					<li className={styles.empty}>리스트가 없어요 !</li>
				) : (
					filteredTodos.map(todo => {
						return (
							<li key={todo.id}>
								{/* <span className={styles.date}>{new Date(todo.date).toLocaleDateString()}</span> */}
								<input 
									id={todo.label}
									type="checkbox" 
									className={styles.input_check} 
									checked={todo.isDone}
									onChange={() => checkTodo(todo.id)}
								/>
								<label 
									htmlFor={todo.label} 
									className={styles.content}
								>
									{todo.content}
								</label>
								<button 
									className={styles.btn_delete}
									aria-label="투두 삭제하기"
									title="투두 삭제하기"
									onClick={() => deleteTodo(todo.id)}
								>
									<ImBin />
								</button>
							</li>
						)
					})
				)}
			</ul>
		</div>
	)
}