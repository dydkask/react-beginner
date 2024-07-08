import PropType from "prop-types";
import styles from "./button.module.css"

function Button({text}){
    return <button className={styles.btn}>{text}</button>
}

Button.PropType = {
    text: PropType.string.isRequired
}
export default Button;