import { NavLink } from "react-router-dom";
import { memo } from 'react';

function NavigationList() {
	return (
		<nav className='navigation__nav'>
			<ul className='navigation__list'>
				<li className='navigation__item'><NavLink to='/shop' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Home</NavLink></li>
				<li className='navigation__item'><NavLink to='/listen' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Listen</NavLink></li>
				<li className='navigation__item'><NavLink to='/events' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Events</NavLink></li>
				<li className='navigation__item'><NavLink to='/contacts' className={({ isActive }) => isActive ? "navigation__link navigation__link--active" : "navigation__link"}>Contacts</NavLink></li>
			</ul>
		</nav>
	);
}

export default memo(NavigationList);