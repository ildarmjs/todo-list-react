// IconButton.tsx
import React from 'react'
import styles from './IconButton.module.scss'

type IconButtonProps = {
	src: string
	alt: string
	onClick: () => void
	disabled?: boolean
	width?: number
}

const IconButton: React.FC<IconButtonProps> = ({
	src,
	alt,
	onClick,
	disabled = false,
	width = 20
}) => {
	return (
		<img
			className={`${styles.iconButton} ${disabled ? styles.disabled : ''}`}
			src={src}
			alt={alt}
			onClick={!disabled ? onClick : undefined}
			width={width}
		/>
	)
}

export default IconButton
