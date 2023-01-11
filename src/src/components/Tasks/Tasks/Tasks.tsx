import React, { DragEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppThunkDispatch } from '../../../app/Store'
import { editTask } from '../../../services/tasks.service'
import { Task } from '../../../types/task'
import { Task as TaskJob } from '../Task/Task'
import styled from './Tasks.module.css'

interface TasksProps {
	tasks: Task[] | undefined
	backgroundColorTask: string
}

export const Tasks = ({ tasks, backgroundColorTask }: TasksProps) => {
	
	// console.log(tasks![0].status)
	const dispatch = useDispatch<AppThunkDispatch>()

	const handleOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const handleDrop = (event: DragEvent<HTMLDivElement>) => {
		const dataTask = JSON.parse(event.dataTransfer.getData('taskId'))
		const priorityTask = event.pageY > 244 ? 3 : 2
		const statusTask = event.pageY > 244 ? 'Done' : 'In progress'
		const newTask = { ...dataTask, priority: priorityTask, status: statusTask }
		console.log(newTask)
		dispatch(editTask(newTask))
	}

	//con el id ejecutar un update cambiando el estado

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleOver}
			className={styled.container}
		>
			{tasks?.map((job) => (
				<TaskJob
					key={job._id}
					styled={{
						backgroundColor: `${backgroundColorTask}`,
						fontWeight: 'bold',
						color: 'white',
						border: 'none',
					}}
					task={job}
				/>
			))}
		</div>
	)
}
