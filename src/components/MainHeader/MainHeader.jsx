import NavItem from "../NavItem/NavItem"
import style from "./MainHeader.module.css"

const MainHeader = () => {
return (
    <header>
        <nav>
            <ul className={style.navigateList}>
            <NavItem title="Cards spinning" url="/CardsSpinning"/>
            <NavItem title="2" url="/2"/>
            <NavItem title="3" url="/3"/>
            <NavItem title="4" url="/4"/>
            </ul>
        </nav>
    </header>
)
}

export default MainHeader