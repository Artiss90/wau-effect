import sn from 'classnames';
import style from './ViewWrapper.module.css';

export default function ViewWrapper({ children, addStyle }) {
  return <div className={sn(style.mainContainer, { [style[addStyle]]: addStyle })}>{children}</div>;
}
