import styles from './../App.module.css';

const filters = ['All', 'Active', 'Completed'];

export default function Filter({ filter, setFilter }) {
	return (
		<ul className={styles.filterTab}>
			{filters.map((f, i) => (
				<li key={i} className={filter === f ? styles.active : ''}>
					<button title={`투두 ${f} 항목 보기`} onClick={() => setFilter(f)}>{f}</button>
				</li>
			))}
		</ul>
	)
}