import "./HeaderTop.scss";
import Cart from "../CartBtn";
import PickedOut from "../PickedOutBtn";
import { memo } from "react";

function HeaderTop() {


    return (
        <div className='header-top'>

            <div className='container'>
                <div className='header-top__icons-bar'>
                    <button className='header-top__icon-btn'><i className="fa fa-brands fa-facebook"></i></button>
                    <button className='header-top__icon-btn'><i className="fa fa-solid fa-basketball-ball"></i></button>
                    <button className='header-top__icon-btn'><i className="fa fa-brands fa-twitter"></i></button>
                    <button className='header-top__icon-btn'><i className="fa fa-solid fa-envelope"></i></button>
                    <button className='header-top__icon-btn'><i className="fa fa-brands fa-vimeo"></i></button>
                </div>
                <div className='header-top__user-tools'>

                    <PickedOut />

                    <Cart />

                </div>
            </div>

        </div>
    );
}

export default memo(HeaderTop);