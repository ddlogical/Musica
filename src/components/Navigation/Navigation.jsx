import "./Navigation.scss";
import { Link } from "react-router-dom";
import { memo } from 'react';

function Navigation() {


    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'><Link to='/shop' className='navigation__link' href="#">Home</Link></li>
                <li className='navigation__item'><Link to='/cart' className='navigation__link' href="#">Cart</Link></li>
                <li className='navigation__item'><Link to='/picked-out' className='navigation__link' href="#">Picked Out</Link></li>
                <li className='navigation__item'><Link to='/shop' className='navigation__link' href="#">Contact us</Link></li>
            </ul>
            <button className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </button>
        </nav>
    );
}

export default memo(Navigation);