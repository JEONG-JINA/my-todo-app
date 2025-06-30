import styles from './../App.module.css';

const tabs = [
	{
		id: '01',
		category: 'All'
	},
	{
		id: '02',
		category: 'Active'
	},
	{
		id: '03',
		category: 'Completed'
	}
];

export default function Filter({ filter, setFilter }) {
	return (
		<ul className={styles.filterTab}>
			{tabs.map(tab => (
				<li 
					key={tab.id}
					className={filter === tab.category ? styles.active : ''}
					onClick={() => setFilter(tab.category)}
				>
					{tab.category}
				</li>
			))}
		</ul>
	)
}