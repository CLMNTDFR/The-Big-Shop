import '../styles/Cart.css';
import { useState, useEffect } from 'react';
import bigcart from '../assets/bigcart.svg';
import clearIcon from '../assets/Clear.svg';
import deleteIcon from '../assets/delete.svg'; // Import du nouvel icône de suppression
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Toastify.css';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);

    useEffect(() => {
        document.title = `The Big Shop • Cart: ${total}€`;
    }, [total]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.tbs-cart')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const removeItem = (name) => {
        const updatedCart = cart.filter((item) => item.name !== name);
        updateCart(updatedCart);
    };

    return (
        <div className={`tbs-cart ${isOpen ? 'tbs-cart-open' : 'tbs-cart-closed'}`}>
            <button
                className='tbs-cart-toggle-button'
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={bigcart} alt='Big Cart' className='tbs-cart-image' />
            </button>
            {isOpen && (
                <div className='tbs-cart-content'>
                    <div className='tbs-cart-header'>
                        <h2 className='tbs-cart-title'>Big Cart</h2>
                    </div>
                    <ul className='tbs-cart-list'>
                        {cart.map((item, index) => (
                            <li key={`${item.name}-${index}`} className='tbs-cart-item'>
                                <button className='tbs-delete-button' onClick={() => removeItem(item.name)}>
                                    <img src={deleteIcon} alt="Delete icon" className='tbs-delete-icon' />
                                </button>
                                <span>{item.name} : {item.price}€</span>
                            </li>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button className='tbs-clear-button' onClick={() => updateCart([])}>
                        <img src={clearIcon} alt="Clear icon" className='tbs-clear-icon' />
                        Clear the cart
                    </button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Cart;
