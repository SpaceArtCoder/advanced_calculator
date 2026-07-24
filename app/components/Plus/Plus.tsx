import styles from "./Plus.module.scss"

export default function Plus() {
    return (
        <div className={styles.stage}>
            <button className={styles.key} aria-label="Plus">
                <span className={styles.glyph}></span>
            </button>
        </div>
    )
}