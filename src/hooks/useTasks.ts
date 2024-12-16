import { useState, useEffect, useMemo } from 'react';
import todosData from '../data/todos.json'
import { TypeTask } from '../types/todo.types';

export const useTasks = () => {
	const [tasks, setTasks] = useState<TypeTask[]>(todosData.todos);
	const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
	const [errorMessage, setErrorMessage] = useState<string>('');

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks) as TypeTask[]);
		}
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

	const addTask = (taskText: string) => {
		if (!taskText.trim()) {
			setErrorMessage('Поле не может быть пустым.');
			return;
		}
		setErrorMessage('');
		const newTask: TypeTask = { id: Date.now(), text: taskText, completed: false };
		setTasks(prevTasks => [...prevTasks, newTask]);
	};

	const toggleTaskCompletion = (id: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id: number) => {
		const confirmDelete = window.confirm('Вы действительно хотите удалить эту задачу?');
		if (confirmDelete) {
			setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
		}
	};

	const startEditing = (task: TypeTask) => {
		setErrorMessage('');
		return task;
	};

	const saveEditing = (id: number, newText: string) => {
		if (!newText.trim()) {
			setErrorMessage('Поле не может быть пустым');
			return;
		}
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, text: newText } : task
			)
		);
		setErrorMessage('');
	};

	const filteredTasks = useMemo(() => {
		return tasks.filter((task) => {
			if (filter === 'completed') return task.completed;
			if (filter === 'incomplete') return !task.completed;
			return true;
		});
	}, [tasks, filter]);
	const hasCompletedTasks = tasks.some(task => task.completed);
	const hasIncompleteTasks = tasks.some(task => !task.completed);

	return {
		tasks: filteredTasks,
		addTask,
		toggleTaskCompletion,
		deleteTask,
		saveEditing,
		startEditing,
		filter,
		setFilter,
		errorMessage,
		setErrorMessage,
		hasCompletedTasks,
		hasIncompleteTasks
	};
};
