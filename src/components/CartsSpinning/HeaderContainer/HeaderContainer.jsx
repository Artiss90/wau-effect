import style from "./HeaderContainer.module.css";

const HeaderContainer = () => {
    return ( 
      <div className={style.containerForHeader}>
        <h2 className={style.header}>
          Hosting Plans
        </h2>
      </div>)
}

export default HeaderContainer