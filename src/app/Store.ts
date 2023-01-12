import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import TaskReducer from '../features/Task/TaskSlice'
import thunkMiddleware from 'redux-thunk'
// ...
const store = configureStore({
	reducer: {
		tasksState: TaskReducer,
	},
	middleware: [thunkMiddleware],
})
export type RootState = ReturnType<typeof store.getState>//permite usar el use selector y el useDispatch(para enviar las funciones)
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export default store