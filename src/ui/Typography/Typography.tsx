import React from 'react'

interface TypographyProps {
	style: React.CSSProperties
	title: string
}

export const Typography = ({ style, title }: TypographyProps) => {
	return <span style={style}>{title}</span>
}
