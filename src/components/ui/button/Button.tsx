import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	onClick: () => void
	text: string
	className?: string
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	text,
	className = '',
	disabled = false
}) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${className}`}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
