import sn from 'classnames'
import style from './Button.module.css'

const Button = ({color, children}) => {
    const isWhite = color === "white";
    const isGrad = color === "gradient";
    return (
        <button type="button" className={sn(style.btn, {[style.btnWhite]: isWhite}, {[style.btnGrad]: isGrad})}>{children}</button>
    )
}

export default Button