import './styles/Rates.scss';
import React, { useState } from 'react';


function Rates(props) {
    const { title, price, speed, title_bg, price_bg } = props;
    const [select, setSelect] = useState(props.select);

    const selectCard = () => {
        setSelect(!select);
    }

    return (
        <div className={select ? 'card selected' : 'card'} onClick={selectCard}>
            <div className={`card_title_bg ${title_bg}`}>
                <div className='card_title'>{title}</div>
            </div>
            <div className={`card_price_bg ${price_bg}`}>
                <p className='card_currency'>руб</p>
                <p className='card_price'>{price}</p>
                <p className='card_date'>/мес</p>
            </div>
            <div className='card_speed'>{speed}</div>
            <div className={`card_info`}>Обьем включенного трафика не ограничен</div>
        </div >
    )
}

export default Rates;