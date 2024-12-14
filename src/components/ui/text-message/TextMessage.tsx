import { FC } from 'react'
import styles from './TextMessage.module.scss'

type TextMessageProps = {
	text: string
}

const TextMessage: FC<TextMessageProps> = ({ text }) => {
	return <div className={styles.text}>{text}</div>
}

export default TextMessage
