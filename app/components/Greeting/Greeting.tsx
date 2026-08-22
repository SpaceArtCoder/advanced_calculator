import styles from './Greeting.module.scss'

interface GreetingProps {
    power: boolean;
    showHello: boolean;
}

export default function Greeting({power, showHello}: GreetingProps) {
    return (
        <p className={power && showHello ? `${styles.greeting} ${styles.show}` : styles.greeting}>Hello</p>
    )
}