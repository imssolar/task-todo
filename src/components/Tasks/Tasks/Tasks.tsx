import React, { DragEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppThunkDispatch, RootState } from '../../../app/Store'
import { editTask, getByIdTasks } from '../../../services/tasks.service'
import { Task, Status } from '../../../types/task'
import { Task as TaskJob } from '../Task/Task'
import styled from './Tasks.module.css'

interface TasksProps {
	tasks: Task[]
	backgroundColorTask: string
	status: Status
}

export const Tasks = ({ tasks, backgroundColorTask, status }: TasksProps) => {
	// console.log(tasks![0].status)
	const dispatch = useDispatch<AppThunkDispatch>()
	const { task } = useSelector((state: RootState) => state.tasksState)
	const handleOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const handleDrop = (event: DragEvent<HTMLDivElement>) => {
		if (task) {
			dispatch(editTask({ ...task, status: status }))
		}
	}

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleOver}
			className={styled.container}
			style={{ minHeight: 400, minWidth: 200 }}
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
