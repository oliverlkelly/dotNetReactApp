import {BadgeInterface} from "../types.ts";
import styles from './Badge.module.css'

const Badge = ({text}: BadgeInterface) => {
    return (
        <small className={`${styles.badge}`}>{text}</small>
    )
}

export default Badge