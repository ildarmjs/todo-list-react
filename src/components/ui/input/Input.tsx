import React, { ChangeEvent } from 'react'
import styles from './Input.module.scss'

type InputProps = {
	value?: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	className?: string
	type?: string
	checked?: boolean
}

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	placeholder = '',
	className = '',
	type = 'text',
	checked
}) => {
	return (
		<input
			checked={checked}
			className={`${styles.input} ${className}`}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
