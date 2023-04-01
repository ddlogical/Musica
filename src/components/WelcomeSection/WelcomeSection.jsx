import "./WelcomeSection.scss";
import { Link } from "react-router-dom";
import Icon from '../Icon';
import { memo } from 'react';

function WelcomeSection() {

	return (
		<section className='welcome'>

			<div className='container'>

				<div className='welcome__content'>

					<h1 className='welcome__heading'>Welcome to <span>musica,</span> check out our latest albums</h1>

					<div className='welcome__proposals'>
						<Link to="/listen" className='welcome__proposal'>
							<div className='welcome__proposal-heading'>
								<Icon color='#fff' type='headphones' />
								<h3>LISTEN BEFORE PURCHASE</h3>
							</div>
							<p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
						</Link>
						<Link to="/shop" className='welcome__proposal welcome__proposal--colored'>
							<div className='welcome__proposal-heading'>
								<Icon color='#fff' type='album' />
								<h3>CHECK OUR CD COLLECTION</h3>
							</div>
							<p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
						</Link>
						<Link to="/events" className='welcome__proposal'>
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