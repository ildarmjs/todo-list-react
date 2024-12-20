import type { PropsWithChildren } from 'react'
import styles from './Container.module.scss'

export default function Container({ children }: PropsWithChildren<unknown>) {
	return <div className={styles.container}>{children}</div>
}
