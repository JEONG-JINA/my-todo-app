import styles from './../App.module.css';
import Filter from './Filter';
import { IoSunny, IoSunnyOutline } from 'react-icons/io5';

export default function Header({ darkMode, setDarkMode, filter, setFilter }) {
	const changeMode = () => setDarkMode(!darkMode);
	
	return (
		<header>
			<button
				className={styles.btn_mode}
				onClick={changeMode}
				aria-label="모드 변경하기"
			>
				{darkMode ? <IoSunny /> : <IoSunnyOutline />}
			</button>
			<Filter filter={filter} setFilter={setFilter} />
		</header>
	)
}