import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
            alert("Attention, there is no '@', this is not a valid email address")
		}
	}

    return (
        <footer className='tbs-footer'>
            <div className='tbs-footer-elem'>
                Are you a fan of Big Death Amego?
            </div>
            <div className='tbs-footer-elem'>Leave us your email:</div>
            <input
                placeholder='Enter your email'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer