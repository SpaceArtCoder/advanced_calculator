import styles from "./Device.module.scss"
import Screen from "@/app/components/Screen/Screen"
import Keyboard from "../Keyboard/Keyboard"

export default function Device() {
    return (
        <div className={styles.device}>
            <Screen />
            <Keyboard />
        </div>
    )
}