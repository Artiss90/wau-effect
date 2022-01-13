import HeaderContainer from "./HeaderContainer/HeaderContainer";
import Button from './Button/Button';
import CardContainer from './CardContainer/CardContainer';

import style from "./CardsSpinning.module.css";

const exampleCard = [
{
title:'Basic', 
listDetails:['1 Website', '50 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate',
'1 Included Domain', 'Basic Package Features'], 
price:'$2.95'
},
{
title:'Plus', 
listDetails:['Includes Basic Package Features', 'Unlimited Websites', 'Unlimited SSD Storage', 'Unlimited Domains',
'Unlimited Parked Domains', 'Unlimited Sub Domains'], 
price:'$5.45'
},
{
title:'Pro', 
listDetails:['Includes Plus Plan Features', 'High Performance', '2 Spam Experts', 'Free SSL Certificate',
'Domain Privacy', 'Site Backup - CodeGuard Basic'], 
price:'$13.95'
},
{},
{},
{},
{},
{}
]

const CardsSpinning = () => {
    return (  <div className={style.main}>
          <HeaderContainer/>

          <div className={style.row}>
          {exampleCard.map(item => <CardContainer title={item?.title} listDetails={item?.listDetails} price={item?.price}/>)}
          </div>
    
          <div className={style.containerBtn}>
            <Button color="gradient">Get Started</Button>
          </div>
      </div>)
}

export default CardsSpinning