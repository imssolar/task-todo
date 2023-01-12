import React from 'react'
import style from './Spinner.module.css'
const Spinner = () => {
	return (
		<div className={style.lds_default}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner
