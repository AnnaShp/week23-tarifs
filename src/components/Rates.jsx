import './styles/Rates.scss';

function Rates(props) {
    const { title, price, speed, title_bg, price_bg, selected } = props;
    return (
        <div className={`card `}>
            <div className={`card_title_bg ${title_bg} ${selected}`}>
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