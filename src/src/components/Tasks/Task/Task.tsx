import React, { DragEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Task as TaskType } from '../../../types/task'
import style from './Task.module.css'

interface TaskProps {
	task: TaskType
	styled: React.CSSProperties
}

export const Task = ({ task, styled }: TaskProps) => {
	const [dragState, setDragState] = useState<boolean>(false)

	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		// const {
		// 	dataTransfer: { setData },
		// } = event

		event.dataTransfer.setData('taskId', JSON.stringify(task))
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
