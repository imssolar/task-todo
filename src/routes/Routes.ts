import { Home } from '../pages/Home/Home'
import { Edit } from '../pages/Edit/Edit'

interface Route {
	path: string
	name: string
	component: () => JSX.Element
	children?: Route[]
}

export const routes: Route[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/edit-task/:id',
		name: 'Edit',
		component: Edit,
	},
]
