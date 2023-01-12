import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'
interface RatingProps {
	isChecked: boolean
}

export const Rating = ({ isChecked }: RatingProps) => {
	return (
		<div>
			{isChecked ? (
				<CgEditBlackPoint color="blue" />
			) : (
				<CgEditBlackPoint color="red" />
			)}
		</div>
	)
}
