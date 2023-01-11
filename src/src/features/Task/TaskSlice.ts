import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Task } from '../../types/task'
import api from '../../api/api'
import {
	deleteTask,
	editTask,
	getByIdTasks,
	getTasks,
	postTasks,
} from '../../services/tasks.service'

interface InitialState {
	tasks: Task[]
	loading: string
	error: string
	task: Task | null
}

const INITIAL_STATE: InitialState = {
	tasks: [],
	loading: '',
	error: '',
	task: null,
}

export const TaskSlice = createSlice({
	name: 'tasks',
	initialState: INITIAL_STATE,
	reducers: {
		// addTask: (state, action: PayloadAction<Task>) => [...state, action.payload],
	},
	extraReducers: (builder) => {
		builder.addCase(getTasks.pending, (state) => {
			state.tasks = []
			state.loading = 'loading'
		})
		builder.addCase(getTasks.fulfilled, (state, { payload }) => {
			state.tasks = payload
			state.loading = 'loaded'
		})
		builder.addCase(getTasks.rejected, (state, action) => {
			state.loading = 'error'
			state.error = action.error.message ?? ''
		})

		builder.addCase(postTasks.pending, (state) => {
			// state.tasks = []
			state.loading = 'loading'
		})
		builder.addCase(postTasks.fulfilled, (state, { payload }) => {
			console.log(payload)
			state.tasks = [...state.tasks, payload]
			state.loading = 'loaded'
		})
		builder.addCase(postTasks.rejected, (state, action) => {
			state.loading = 'error'
			state.error = action.error.message ?? ''
		})

		builder.addCase(getByIdTasks.pending, (state) => {
			// state.tasks = []
			state.loading = 'loading'
		})
		builder.addCase(getByIdTasks.fulfilled, (state, { payload }) => {
			console.log(payload)
			state.task = payload
			state.loading = 'loaded'
		})
		builder.addCase(getByIdTasks.rejected, (state, action) => {
			state.loading = 'error'
			state.error = action.error.message ?? ''
		})

		builder.addCase(editTask.pending, (state) => {
			// state.tasks = []
			state.loading = 'loading'
		})
		builder.addCase(editTask.fulfilled, (state, { payload }) => {
			// console.log(payload)  
			state.tasks = state.tasks.map((task) =>
				task._id === payload._id ? payload : task
			)
			// state.task = payload
			state.loading = 'loaded'
		})
		builder.addCase(editTask.rejected, (state, action) => {
			state.loading = 'error'
			state.error = action.error.message ?? ''
		})

		/********************DELETE**************/
		builder.addCase(deleteTask.pending, (state) => {
			// state.tasks = []
			state.loading = 'loading'
		})
		builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
			console.log(payload)
			state.tasks = state.tasks.filter((task) =>
				task._id !== payload.id  
			)
			// state.task = payload
			state.loading = 'loaded'
		})
		builder.addCase(deleteTask.rejected, (state, action) => {
			state.loading = 'error'
			state.error = action.error.message ?? ''
		})
	},
})

// export const { addTask } = TaskSlice.actions
export default TaskSlice.reducer
