import React from 'react'
import { routes } from './routes/Routes'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.name}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default App
