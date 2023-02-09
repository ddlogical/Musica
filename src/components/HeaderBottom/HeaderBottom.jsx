import "./HeaderBottom.scss";
import Navigation from '../Navigation';
import { memo } from 'react';

function HeaderBottom() {

    return (
        <div className='header-bottom'>

            <div className='container'>

                <div className='header-bottom__logo'>
                    <img className="header-bottom__logo-img" src="img/logo.png" alt="logo-img" />
                </div>

                <Navigation />

            </div>

        </div>
    );
}

export default memo(HeaderBottom);