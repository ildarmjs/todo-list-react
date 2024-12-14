import { ChangeEvent, FC, useState } from 'react'
import styles from './TaskInput.module.scss'
import Button from '../ui/button/Button'
import Input from '../ui/input/Input'

type TaskInputProps = {
	onAddTask: (taskText: string) => void
	errorMessage: string
	setErrorMessage: (message: string) => void
}

const TaskInput: FC<TaskInputProps> = ({ onAddTask, errorMessage }) => {
	const [taskText, setTaskText] = useState<string>('')

	const handleAddClick = () => {
		onAddTask(taskText)
		setTaskText('')
	}

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskText(event.target.value)
	}

	return (
		<>
			<div className={styles.taskInput}>
				<Input
					value={taskText}
					onChange={handleInputChange}
					placeholder='введите новую задачу'
					className={styles.inputField}
				/>
				<Button
					onClick={handleAddClick}
					text='Добавить'
					className={styles.button}
				/>
			</div>
			{taskText.length < 1 && (
				<div className={styles.errorMessage}>{errorMessage}</div>
			)}
		</>
	)
}

export default TaskInput
