import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppThunkDispatch } from '../app/Store'
import { deleteTask, editTask, postTasks } from '../services/tasks.service'
import { Status, Task, TaskOmitId } from '../types/task'

interface useFormProps {
	taskProp?: Task
}

export const useForm = ({ taskProp }: useFormProps) => {
	const [formValues, setFormValues] = useState<Task>({
		_id: '',
		title: '',
		description: '',
		priority: 1,
		status: 'To do',
	})

	const [isEdit, setIsEdit] = useState<boolean>(!!taskProp?._id)

	const arr = [0, 1, 2]
	const options: Status[] = ['To do', 'In progress', 'Done']
	const navigate = useNavigate()

	useEffect(() => {
		if (taskProp) {
			setFormValues({
				...formValues,
				title: taskProp.title,
				description: taskProp.description,
				priority: taskProp.priority,
				_id: taskProp._id,
				status: taskProp.status,
			})
		}
	}, [taskProp])
	const dispatch = useDispatch<AppThunkDispatch>()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		})
	}

	const handleDelete = () => {
		if (taskProp?._id) {
			dispatch(deleteTask(taskProp?._id))
			navigate('/')
		}
	}

	/**
	 *
	 * Cuando un elemento esté disabled, cambiar cursor a "bloqueado"
	 *
	 */
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formValues)
		if (formValues._id) {
			dispatch(editTask(formValues))
			navigate('/')
		} else {
			dispatch(postTasks(formValues))
		}
	}

	const handleClick = (check: number) => {
		if (check === 2) {
			setFormValues({
				...formValues,
				priority: 3,
			})
		} else if (check === 1) {
			setFormValues({
				...formValues,
				priority: 2,
			})
		} else {
			setFormValues({
				...formValues,
				priority: 1,
			})
		}
	}

	return {
		formValues,
		arr,
		isEdit,
		options,
		handleClick,
		handleSubmit,
		handleChange,
		handleDelete,
	}
}
