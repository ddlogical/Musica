import "./Footer.scss";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Icon from "../Icon/Icon";
import { memo } from 'react';

function Footer() {

    return (
        <footer className='footer'>

            <a href="#header" className='footer__navigate-btn'><Icon type='arrow' color="#fff" /></a>

            <FooterTop />

            <FooterBottom />

        </footer>
    );
}

export default memo(Footer);