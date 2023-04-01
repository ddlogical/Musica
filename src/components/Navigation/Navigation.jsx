import { NavLink } from "react-router-dom";
import "./Navigation.scss";
// eslint-disable-next-line no-unused-vars
import NavigationList from "./NavigationList";
import { memo } from 'react';

function Navigation() {

	return (
		<div className='navigation'>
			<input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
			<label htmlFor="navi-toggle" className="navigation__button">
				<span className="navigation__icon">&nbsp;</span>
			</label>
			<div className="navigation__background">&nbsp;</div>
			<nav className='navigation__nav'>
				<ul className='navigation__list'>
					<li className='navigation__item'><NavLink to='/shop' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Home</NavLink></li>
					<li className='navigation__item'><NavLink to='/listen' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Listen</NavLink></li>
					<li className='navigation__item'><NavLink to='/events' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Events</NavLink></li>
					<li className='navigation__item'><NavLink to='/contacts' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Contacts</NavLink></li>
				</ul>
			</nav>
		</div>
	);
}

export default memo(Navigation);