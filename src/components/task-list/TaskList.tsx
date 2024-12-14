import React from 'react'
import { TypeTask } from '../../types/todo.types'
import Task from '../task/Task'
import styles from './TaskList.module.scss'

type TaskListProps = {
	tasks: TypeTask[]
	onToggleCompletion: (id: number) => void
	onDelete: (id: number) => void
	onSaveEditing: (id: number, newText: string) => void
}

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	onToggleCompletion,
	onDelete,
	onSaveEditing
}) => {
	return (
		<ul className={styles.taskList}>
			{tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onToggleCompletion={onToggleCompletion}
					onDelete={onDelete}
					onSaveEditing={onSaveEditing}
				/>
			))}
		</ul>
	)
}

export default TaskList
