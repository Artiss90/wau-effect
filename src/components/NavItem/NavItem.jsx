import { NavLink } from "react-router-dom"
import style from "./NavItem.module.css"

const NavItem = ({title, url}) => {
    return(<li>
        <NavLink className={style.link} to={url}>
            <span className={style.text} title={title}>
                {title}
            </span>
        </NavLink>
            </li>)
}

export default NavItem