import styles from './Greeting.module.scss'

interface GreetingProps {
    showHello: boolean;
}

export default function Greeting({showHello}: GreetingProps) {
    return (
        <p className={showHello ? `${styles.greeting} ${styles.show}` : styles.greeting}>Hello</p>
    )
}