import styled from '@emotion/styled'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppThunkDispatch } from '../../app/Store'
import { useForm } from '../../hooks/useForm'
import { postTasks } from '../../services/tasks.service'
import { Task } from '../../types/task'
import { Rating } from '../Rating/Rating'
import style from './Form.module.css'

interface FormProps {
	taskProp?: Task
}

/**
 *
 * Pasar por parámetro al useForm "task" y dentro del hook preguntar si la task tiene datos
 * usar setFormValues y pisar los datos de la task
 *
 * @returns
 */

export const Form = ({ taskProp }: FormProps) => {
	const {
		formValues,
		arr,
		isEdit,
		options,
		handleClick,
		handleSubmit,
		handleChange,
		handleDelete,
	} = useForm({
		taskProp,
	})

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
				placeholder="Title"
				type="text"
				name="title"
				className={style.input}
				value={formValues.title}
				onChange={handleChange}
			/>

			<textarea
				placeholder="Description"
				name="description"
				value={formValues.description}
				onChange={handleChange}
				className={style.input}
			></textarea>
			<div className={style.priority_container}>
				<label>Priority</label>

				{arr.map((check) => (
					<button
						type="button"
						className={style.btnPriority}
						key={check}
						onClick={() => handleClick(check)}
						disabled={formValues.priority === check + 1 ? true : false}
					>
						<Rating isChecked={formValues.priority > check ? true : false} />
					</button>
				))}
			</div>
			{isEdit && (
				<div>
					<select
						onChange={handleChange}
						value={formValues.status}
						name="status"
					>
						{options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
			)}
			<button className={style.send_button} type="submit">
				Send
			</button>
			{isEdit ? (
				<button type="button" onClick={handleDelete}>
					delete
				</button>
			) : null}
		</form>
	)
}
