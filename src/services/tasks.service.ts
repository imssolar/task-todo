import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api/api'
import { Task } from '../types/task'

export const getTasks = createAsyncThunk('/get', async (_, thunkAPI) => {
	try {
		const response = await api.get<Task[]>('/task')
		return response.data
	} catch (error) {
		return thunkAPI.rejectWithValue({ error: 'error' })
	}
})

export const postTasks = createAsyncThunk(
	'/post',
	async (body: Task, thunkAPI) => {
		try {
			const response = await api.post<Task>('/task', body)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: 'error' })
		}
	}
)

export const getByIdTasks = createAsyncThunk(
	'/id',
	async (id: string, thunkAPI) => {
		try {
			const response = await api.get<Task>(`/task/${id}`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: 'error' })
		}
	}
)

export const editTask = createAsyncThunk(
	'/update',
	async (taskToUpdate: Task, thunkAPI) => {
		try {
			const response = await api.put<Task>(
				`/task/${taskToUpdate._id}`,
				taskToUpdate
			)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: 'error' })
		}
	}
)

export const deleteTask = createAsyncThunk(
	'/delete',
	async (idToDelete: string, thunkAPI) => {
		try {
			const response = await api.delete(`/task/${idToDelete}`)
			return {data:response.data,id:idToDelete}
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: 'error' })
		}
	}
)
