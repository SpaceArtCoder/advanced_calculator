import styles from './Greeting.module.scss'

export default function Greeting({showHello}) {
    return (
        <p className={showHello ? `${styles.greeting} ${styles.show}` : styles.greeting}>Hello</p>
    )
}