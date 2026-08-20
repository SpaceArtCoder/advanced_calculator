import styles from './Greeting.module.scss'

interface GreetingProps {
    power: boolean;
}

export default function Greeting({power}: GreetingProps) {
    return (
        <p className={power ? `${styles.greeting} ${styles.show}` : styles.greeting}>Hello</p>
    )
}