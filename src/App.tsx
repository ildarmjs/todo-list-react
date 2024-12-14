import React from 'react'
import TaskInput from './components/task-input/TaskInput'
import TaskFilter from './components/task-filter/TaskFilter'
import TaskList from './components/task-list/TaskList'
import { useTasks } from './hooks/useTasks'
import Container from './components/container/Container'
import TextMessage from './components/ui/text-message/TextMessage'
import Title from './components/ui/title/Title'

const App: React.FC = () => {
	const {
		tasks,
		addTask,
		toggleTaskCompletion,
		deleteTask,
		filter,
		setFilter,
		errorMessage,
		setErrorMessage,
		saveEditing,
		hasIncompleteTasks,
		hasCompletedTasks
	} = useTasks()

	return (
		<div>
			<Container>
				<div className='wrapper'>
					<Title title='TODO' />
					<TaskInput
						onAddTask={addTask}
						errorMessage={errorMessage}
						setErrorMessage={setErrorMessage}
					/>
					{tasks.length ? (
						<TaskList
							tasks={tasks}
							onToggleCompletion={toggleTaskCompletion}
							onDelete={deleteTask}
							onSaveEditing={saveEditing}
						/>
					) : (
						<TextMessage text='У вас нет задач. Добавьте новую задачу!' />
					)}
					<TaskFilter
						filter={filter}
						setFilter={setFilter}
						hasIncompleteTasks={hasIncompleteTasks}
						hasCompletedTasks={hasCompletedTasks}
					/>
				</div>
			</Container>
		</div>
	)
}

export default App
