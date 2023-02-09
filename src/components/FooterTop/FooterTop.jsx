import "./FooterTop.scss";
import { Link } from "react-router-dom";
import Icon from '../Icon/Icon';
import { memo } from 'react';

function FooterTop() {
    return (
        <div className='footer-top' style={{ background: `url(${process.env.PUBLIC_URL + "/img/footer-top-bg.png"}) repeat` }}>

            <div className='container'>

                <div className='footer-top__info'>

                    <div className='footer-top__about'>
                        <h4>Little about us</h4>
                        <p className='footer-top__about-text'><span>Sed posuere</span> consectetur  est at.  Nulla vitae elit libero, a pharetra. Lorem ipsum <span>dolor sit</span> amei, conse cletuer adipiscing elit.</p>
                    </div>

                    <div className='footer-top__socialize'>
                        <h4>Socialize with us</h4>
                        <div className='footer-top__icons-bar'>
                            <button className='footer-top__icon-btn'><i className="fa fa-brands fa-facebook"></i></button>
                            <button className='footer-top__icon-btn'><i className="fa fa-brands fa-twitter"></i></button>
                            <button className='footer-top__icon-btn'><i className="fa fa-solid fa-basketball-ball"></i></button>
                            <button className='footer-top__icon-btn'><i className="fa fa-brands fa-vimeo"></i></button>
                            <button className='footer-top__icon-btn'><i className="fa fa-solid fa-envelope"></i></button>
                        </div>
                    </div>

                </div>

                <div className='footer-top__archives'>
                    <h4>Our Archives</h4>
                    <ul className='footer-top__archives-list'>
                        <li className='footer-top__archives-item'><Link to='/shop' className='footer-top__archives-link'>March 2012</Link></li>
                        <li className='footer-top__archives-item'><Link to='/shop' className='footer-top__archives-link'>February 2012</Link></li>
                        <li className='footer-top__archives-item'><Link to='/shop' className='footer-top__archives-link'>January 2012</Link></li>
                        <li className='footer-top__archives-item'><Link to='/shop' className='footer-top__archives-link'>December 2011</Link></li>
                    </ul>
                </div>

                <div className='footer-top__posts'>
                    <h4>Popular Posts</h4>
                    <div className='footer-top__posts-albums'>
                        <div className='footer-top__posts-album'>
                            <div className='footer-top__posts-image'><img src="img/album-9.png" className='footer-top__posts-img' alt="Post img 1" /></div>
                            <div className='footer-top__posts-text'>
                                <p className='footer-top__posts-heading'>Great Album</p>
                                <p className='footer-top__posts-comments'><Icon type='comment' color='#fff' /><span>12 Comments</span></p>
                            </div>
                        </div>
                        <div className='footer-top__posts-album'>
                            <div className='footer-top__posts-image'><img src="img/album-10.png" className='footer-top__posts-img' alt="Post img 2" /></div>
                            <div className='footer-top__posts-text'>
                                <p className='footer-top__posts-heading'>Great Album</p>
                                <p className='footer-top__posts-comments'><Icon type='comment' color='#fff' /><span>12 Comments</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='footer-top__tools'>

                    <div className='footer-top__search'>
                        <h4>Search our Site</h4>
                        <div className='footer-top__search-field'>
                            <input className='footer-top__search-input' type='search' placeholder='Enter Search ...' />
                        </div>
                    </div>

                    <div className='footer-top__cloud'>
                        <h4>Tag Cloud</h4>
                        <div className='footer-top__cloud-content'>
                            <button className='footer-top__cloud-btn'>Audio CD</button>
                            <button className='footer-top__cloud-btn'>Video</button>
                            <button className='footer-top__cloud-btn'>Playlist</button>
                            <button className='footer-top__cloud-btn'>Avantgarde</button>
                            <button className='footer-top__cloud-btn'>Melancholic</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default memo(FooterTop);