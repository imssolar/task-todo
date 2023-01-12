import React from 'react'
import { routes } from '../../routes/Routes'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
	return (
		<nav>
			<ul>
				{routes.map((route) => (
					<li key={route.name}>
						<NavLink to={route.path}>{route.name}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
