import Button from '../Button/Button'
import sn from 'classnames'
import style from './CardContainer.module.css'

const CardContainer = ({title ='Basic', listDetails=['1 Website', '50 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate',
'1 Included Domain', 'Basic Package Features'], price='$2.95'}) => {
    return (
        <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={sn(style.cardSide, style.front)}>
            <div className={style.cardTitle}>
              <h4 className={style.cardHeading}>{title}</h4>
            </div>

            <div className={style.cardDetails}>
              <ul>
               {listDetails.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={sn(style.cardSide, style.back)}>
            <div>
              <div className={style.cardPrice}>
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

export default CardContainer