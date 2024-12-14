import React from 'react'
import styles from './TaskFilter.module.scss'
import Button from '../ui/button/Button'

type TaskFilterProps = {
	filter: 'all' | 'completed' | 'incomplete'
	setFilter: (filter: 'all' | 'completed' | 'incomplete') => void
	hasCompletedTasks: boolean
	hasIncompleteTasks: boolean
}

const TaskFilter: React.FC<TaskFilterProps> = ({
	filter,
	setFilter,
	hasCompletedTasks,
	hasIncompleteTasks
}) => {
	return (
		<>
			<div className={styles.filters}>
				<Button
					onClick={() => setFilter('all')}
					text='Все'
					className={filter === 'all' ? styles.active : ''}
				/>
				<Button
					onClick={() => setFilter('completed')}
					text='Выполненные'
					className={filter === 'completed' ? styles.active : ''}
					disabled={!hasCompletedTasks}
				/>
				<Button
					onClick={() => setFilter('incomplete')}
					text='Невыполненные'
					className={filter === 'incomplete' ? styles.active : ''}
					disabled={!hasIncompleteTasks}
				/>
			</div>
		</>
	)
}

export default TaskFilter
