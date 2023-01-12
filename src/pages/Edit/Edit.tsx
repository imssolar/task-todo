import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppThunkDispatch, RootState } from '../../app/Store'
import { Form } from '../../components/Form/Form'
import Spinner from '../../components/Spinner/Spinner'
import { getByIdTasks } from '../../services/tasks.service'
import { Task } from '../../types/task'

export const Edit = () => {
	const { id } = useParams()

	const dispatch = useDispatch<AppThunkDispatch>()

	const { task, loading } = useSelector((state: RootState) => state.tasksState)

	useEffect(() => {
		if (id) dispatch(getByIdTasks(id))
	}, [id])

	return (
		<div>
			{loading === 'loading' ? (
				<Spinner />
			) : (
				task && (
					<Grid container>
						<Grid item xs={4}></Grid>
						<Grid item xs={4}>
							<Form taskProp={task} />
						</Grid>
						<Grid item xs={4}></Grid>
					</Grid>
				)
			)}
		</div>
	)
}
