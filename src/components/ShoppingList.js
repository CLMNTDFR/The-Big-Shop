import { useState } from 'react';
import { recordList } from "../datas/recordList";
import RecordItem from './RecordItem';
import Categories from './Categories';
import '../styles/ShoppingList.css';
import plusIcon from '../assets/tbs-plus.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('');
    const sortedRecordList = recordList.sort((a, b) => b.year - a.year);

    const categories = sortedRecordList.reduce(
        (acc, record) =>
            acc.includes(record.category) ? acc : acc.concat(record.category),
        []
    );

    function addToCart(name, price) {
        const currentRecordSaved = cart.find((record) => record.name === name);
        if (currentRecordSaved) {
            toast.error(`"${name}" has already been added to the cart`);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
            toast.success(`${name} has been added to the cart`);
        }
    }

    return (
        <div className='tbs-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='tbs-record-list'>
                {sortedRecordList.map(({ id, cover, name, year, price, category }) => (
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <RecordItem
                                id={id}
                                cover={cover}
                                name={name}
                                year={year}
                                price={price} // Passer le prix comme prop
                            />
                            <button className='tbs-add-button' onClick={() => addToCart(name, price)}>
                                <img src={plusIcon} alt="plus icon" className='tbs-plus-icon' />
                                Add to cart
                            </button>
                        </div>
                    ) : null
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
