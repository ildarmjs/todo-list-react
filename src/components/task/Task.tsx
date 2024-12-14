import React, { useState } from 'react'
import { TypeTask } from '../../types/todo.types'
import styles from './Task.module.scss'
import closeIcon from '/public/images/close-icon.png'
import editIcon from '/public/images/edit-icon.png'
import Input from '../ui/input/Input'
import Button from '../ui/button/Button'
import IconButton from '../ui/icon-button/IconButton'
type TaskProps = {
	task: TypeTask
	onToggleCompletion: (id: number) => void
	onDelete: (id: number) => void
	onSaveEditing: (id: number, newText: string) => void
}

const Task: React.FC<TaskProps> = ({
	task,
	onToggleCompletion,
	onDelete,
	onSaveEditing
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newText, setNewText] = useState(task.text)

	const handleSave = () => {
		if (!newText.trim()) {
			return
		}
		onSaveEditing(task.id, newText)
		setIsEditing(false)
	}

	const handleCancel = () => {
		setIsEditing(false)
		setNewText(task.text)
	}
	const handleEditClick = () => {
		if (task.completed) return
		setIsEditing(true)
	}

	return (
		<li className={styles.item}>
			<div>
				<Input
					type={'checkbox'}
					checked={task.completed}
					onChange={() => onToggleCompletion(task.id)}
					className={styles.itemCheckbox}
				/>
			</div>

			{isEditing ? (
				<Input
					value={newText}
					onChange={e => setNewText(e.target.value)}
					className={styles.editInput}
				/>
			) : (
				<div className={task.completed ? styles.textCompleted : styles.text}>
					{task.text}
				</div>
			)}

			<div className={styles.groupBtns}>
				{isEditing ? (
					<>
						<Button
							onClick={handleSave}
							text='Сохранить'
							disabled={newText.length === 0}
						/>
						<Button onClick={handleCancel} text='Отмена' />
					</>
				) : (
					<IconButton
						src={editIcon}
						alt='Редактировать'
						onClick={handleEditClick}
						disabled={task.completed}
					/>
				)}
				{!isEditing && (
					<IconButton
						src={closeIcon}
						alt='Удалить'
						onClick={() => onDelete(task.id)}
					/>
				)}
			</div>
		</li>
	)
}

export default Task
