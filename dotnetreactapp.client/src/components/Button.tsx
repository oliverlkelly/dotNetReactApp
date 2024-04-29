import {ButtonInterface} from "../types.ts";
import styles from './Badge.module.css'

const Button = ({text}: ButtonInterface) => {
    return (
        <small className={`${styles.badge}`}>{text}</small>
    )
}

export default Button