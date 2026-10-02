import styles from './Greeting.module.scss'

interface GreetingProps {
    power: boolean;
    showHello: boolean;
}

export default function Greeting({power, showHello}: GreetingProps) {
    return (
        // Displays the greeting message only if the calculator is on and showHello is true 
        <p className={power && showHello ? `${styles.greeting} ${styles.show}` : styles.greeting}>Hello</p>
    )
}