import "./FooterBottom.scss";
import { Link } from "react-router-dom";
import { memo } from 'react';

function FooterBottom() {
    return (
        <div className='footer-bottom'>
            <div className='footer-bottom'>

                <div className='container'>

                    <div className='footer-bottom__content'>

                        <nav className='footer-bottom__navigation'>
                            <ul className='footer-bottom__navigation-list'>
                                <li className='footer-bottom__navigation-item'><Link to='/shop' className='footer-bottom__navigation-link'>Home</Link></li>
                                <li className='footer-bottom__navigation-item'><Link to='/shop' className='footer-bottom__navigation-link'>Protfolio</Link></li>
                                <li className='footer-bottom__navigation-item'><Link to='/shop' className='footer-bottom__navigation-link'>Sitemap</Link></li>
                                <li className='footer-bottom__navigation-item'><Link to='/shop' className='footer-bottom__navigation-link'>Contact</Link></li>
                            </ul>
                        </nav>

                        <p className='footer-bottom__copyright'>Musica &copy;2022 developed by didenko.dma | All Rights Reserved</p>

                    </div>

                </div>



            </div>
        </div>
    );
}

export default memo(FooterBottom);