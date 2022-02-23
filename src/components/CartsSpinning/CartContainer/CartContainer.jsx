import Button from '../Button/Button'
import sn from 'classnames'
import style from './CartContainer.module.css'

const CartContainer = ({title ='Basic', listDetails=['1 Website', '50 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate',
'1 Included Domain', 'Basic Package Features'], price='$2.95'}) => {
    return (
        <div className={style.cartContainer}>
        <div className={style.cart}>
          <div className={sn(style.cartSide, style.front)}>
            <div className={style.cartTitle}>
              <h4 className={style.cartHeading}>{title}</h4>
            </div>

            <div className={style.cartDetails}>
              <ul>
               {listDetails.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={sn(style.cartSide, style.back)}>
            <div>
              <div className={style.cartPrice}>
                <p className={style.only}>Only</p>
                <p className={style.value}>{`${price}/mo*`}</p>
              </div>
              <Button color="white">Select</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartContainer