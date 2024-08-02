import '../styles/RecordItem.css';

function RecordItem({ id, cover, name, year, price }) {
    return (
        <li key={id} className='tbs-record-item'>
            <img className='tbs-record-item-cover' src={cover} alt={`${name} cover`} />
            <div className="tbs-record-item-info">
                <span className="tbs-record-item-name">{name}</span>
                <span className="tbs-record-item-year">{year}</span>
            </div>
            <div className="tbs-record-item-price">{price}€</div>
        </li>
    )
}

export default RecordItem;
