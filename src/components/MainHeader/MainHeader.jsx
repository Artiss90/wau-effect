import NavItem from "../NavItem/NavItem"
import style from "./MainHeader.module.css"

const MainHeader = () => {
return (
    <header className={style.header}>
        <nav>
            <ul className={style.navigateList}>
            <NavItem title="Carts spinning" url="/CartsSpinning"/>
            <NavItem title="Neomorphic Form" url="/NeomorphicForm"/>
            <NavItem title="3" url="/3"/>
            <NavItem title="4" url="/4"/>
            </ul>
        </nav>
    </header>
)
}

export default MainHeader