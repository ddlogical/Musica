import "./Header.scss";
import HeaderTop from '../HeaderTop';
import HeaderBottom from '../HeaderBottom';
import { memo } from 'react';

function Header() {

    return (
        <header className='header' id="header">

            <HeaderTop  />

            <HeaderBottom />

        </header>
    );
}

export default memo(Header);