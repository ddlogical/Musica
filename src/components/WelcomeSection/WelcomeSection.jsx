import "./WelcomeSection.scss";
import { Link } from "react-router-dom";
import Icon from '../Icon';
import PropTypes from 'prop-types';
import { memo } from 'react';

function WelcomeSection({ page, text }) {

	return (
		<section className='welcome'>

			<div className='container'>

				<div className='welcome__content'>

					<h1 className='welcome__heading'>Welcome to <span>musica,</span> {text}</h1>

					<div className='welcome__proposals'>
						<Link to="/listen" className={page === 'listen' ? 'welcome__proposal welcome__proposal--colored' : 'welcome__proposal'}>
							<div className='welcome__proposal-heading'>
								<Icon color='#fff' type='headphones' />
								<h3>LISTEN BEFORE PURCHASE</h3>
							</div>
							<p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
						</Link>
						<Link to="/shop" className={page === 'home' ? 'welcome__proposal welcome__proposal--colored' : 'welcome__proposal'}>
							<div className='welcome__proposal-heading'>
								<Icon color='#fff' type='album' />
								<h3>CHECK OUR CD COLLECTION</h3>
							</div>
							<p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
						</Link>
						<Link to="/events" className={page === 'events' ? 'welcome__proposal welcome__proposal--colored' : 'welcome__proposal'}>
							<div className='welcome__proposal-heading'>
								<Icon color='#fff' type='notebook' />
								<h3>UPCOMING EVENTS</h3>
							</div>
							<p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
						</Link>
					</div>
				</div>

			</div>

		</section>
	);
}

export default memo(WelcomeSection);

WelcomeSection.propTypes = {
	page: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}