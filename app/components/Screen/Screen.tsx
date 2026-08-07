import styles from "./Screen.module.scss"

export default function Screen() {
    return (
        <div className={styles.screen}>
            <Greeting />
        </div>
    )
}