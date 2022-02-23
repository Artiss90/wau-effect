import React from 'react';
import sn from 'classnames';
import style from './Button.module.css';

function Button({ icon, iconName, title, textBtn, styleRed }) {
  return (
    <button className={sn(style.button, styleRed ? style.red : style.unit)} type="button" title={title}>
      <span className={style.icon} aria-label={iconName}>
        {icon}
      </span>
      {textBtn}
    </button>
  );
}

export default Button;
