import styles from "./Device.module.scss"
import Screen from "@/app/components/Screen/Screen"

export default function Device() {
    return (
        <div className={styles.device}>
            <Screen />
        </div>
    )
}