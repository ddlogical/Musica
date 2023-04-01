import "./HeaderBottom.scss";
import Navigation from '../../Navigation';
import { Link } from "react-router-dom";
import { memo } from 'react';

function HeaderBottom() {

    return (
        <div className='header-bottom'>

            <div className='container'>

                <div className='header-bottom__logo'>
                    <Link to="/shop"><img className="header-bottom__logo-img" src="img/logo.png" alt="logo-img" /></Link>
                </div>

                <Navigation />

            </div>

        </div>
    );
}

export default memo(HeaderBottom);