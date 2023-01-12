/* eslint-disable indent */
import React, { useEffect, useMemo, useState } from 'react'
import { Grid } from '@mui/material'
import style from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppThunkDispatch } from '../../app/Store'
import { getTasks } from '../../services/tasks.service'
import { Form } from '../../components/Form/Form'
import Spinner from '../../components/Spinner/Spinner'
import { Typography } from '../../ui/Typography/Typography'
import { Tasks as TasksList } from '../../components/Tasks/Tasks/Tasks'
import { Task } from '../../types/task'
import {
	MdOutlineCheckCircleOutline,
	MdOutlineWarning,
	MdOutlinePendingActions,
} from 'react-icons/md'
import { useLenguage } from '../../hooks/useLenguage'

/*
1.Avanzar parte de la izquierda considerando conteo de tareas por status
2.Mejorar formulario
3.Priority - cambiar por icono
*/

export const Home = () => {
	const dispatch = useDispatch<AppThunkDispatch>()
	const [loadedData, setLoadedData] = useState(false)
	useEffect(() => {
		dispatch(getTasks())
	}, [])

	const { tasks, loading } = useSelector((state: RootState) => state.tasksState)
	const [todo, setTodo] = useState<Task[]>([])

	const [inProgress, setInProgress] = useState<Task[]>([])
	const [Done, setDone] = useState<Task[]>([])
	useEffect(() => {
		setTodo(tasks.filter((task) => task.status === 'To do'))
		setInProgress(tasks.filter((task) => task.status === 'In progress'))
		setDone(tasks.filter((task) => task.status === 'Done'))
	}, [tasks])

	// useMemo(() => handleOrder(), [tasks])

	const { t, handleLenguage } = useLenguage()
	const numeros: string[] = t('arrayNum', { returnObjects: true })

	return (
		<>
			<Grid style={{ backgroundColor: 'aliceblue' }} container>
				<Grid className={style.container_information} item xs={12} md={4}>
					<select defaultValue={'es'} onChange={handleLenguage}>
						<option value={'es'}>ES</option>
						<option value={'en'}>EN</option>
					</select>
					{numeros.map((num) => (
						<h1 key={num}>{num}</h1>
					))}
					<Typography
						title={t('taskTitle.taskToDo')}
						style={{
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: '1.8rem',
						}}
					/>
					<div>
						<Typography
							title={'To Do:'}
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.5rem',
							}}
						/>
						<span
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.5rem',
							}}
						>
							{todo.length}
							<MdOutlinePendingActions
								style={{
									color: '#F75D59',
									marginLeft: '.4rem',
									textAlign: 'center',
									fontSize: '1.2rem',
								}}
							/>
						</span>
					</div>

					<div>
						<Typography
							title={'In Progress:'}
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.2rem',
							}}
						/>
						<span
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.2rem',
							}}
						>
							{inProgress.length}
							<MdOutlineWarning
								style={{
									color: '#FFD700',
									marginLeft: '.4rem',
									textAlign: 'center',
								}}
							/>
						</span>
					</div>
					<div>
						<Typography
							title={'Done:'}
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.5rem',
							}}
						/>
						<span
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.5rem',
							}}
						>
							{Done.length}
							<MdOutlineCheckCircleOutline
								style={{
									color: 'green',
									marginLeft: '.4rem',
									textAlign: 'center',
								}}
							/>
						</span>
					</div>
				</Grid>
				<Grid item xs={12} md={4} className={style.container_form}>
					<Form />
					<div className={style.container_tasksToDo}>
						<Typography
							style={{
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: '1.8rem',
							}}
							title={'Lista de tareas'}
						/>

						<TasksList
							tasks={todo}
							backgroundColorTask={'rgba(205,92,92)'}
							status={'To do'}
						/>
					</div>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography
						style={{
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: '1.8rem',
							display: 'flex',
							justifyContent: 'center',
						}}
						title={'Tareas In progress'}
					/>
					<TasksList
						tasks={inProgress}
						backgroundColorTask={'rgba(255,165,0)'}
						status={'In progress'}
					/>
					<div />
					<Typography
						style={{
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: '1.8rem',
							display: 'flex',
							justifyContent: 'center',
						}}
						title={'Tareas terminadas'}
					/>
					<TasksList
						tasks={Done}
						backgroundColorTask={'rgba(60,179,113)'}
						status={'Done'}
					/>
				</Grid>
			</Grid>
		</>
	)
}
