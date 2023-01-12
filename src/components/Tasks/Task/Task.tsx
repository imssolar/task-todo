import React, { DragEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Task as TaskType } from '../../../types/task'
import style from './Task.module.css'
import { AppThunkDispatch } from '../../../app/Store'
import { useDispatch } from 'react-redux'
import { getByIdTasks } from '../../../services/tasks.service'

interface TaskProps {
	task: TaskType
	styled: React.CSSProperties
}

export const Task = ({ task, styled }: TaskProps) => {
	const [dragState, setDragState] = useState<boolean>(false)
	const dispatch = useDispatch<AppThunkDispatch>()
	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData('taskId', task._id)
		dispatch(getByIdTasks(task._id))
		setDragState(true)
	}

	const onDragEnd = () => {
		console.log('on drag end')
		setDragState(false)
	}
	return (
		<div
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			style={styled}
			className={style.container}
			key={task._id}
		>
			<Link className={style.task} to={`/edit-task/${task._id}`}>
				{task.title}
			</Link>
		</div>
	)
}
