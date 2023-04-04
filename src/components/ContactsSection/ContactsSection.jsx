import "./ContactsSection.scss";
import { memo } from "react";

function ContactsSection() {

	return (
		<section className='contacts'>

			<div className='container'>

				<div className='contacts__content'>

					<div className='contacts__left'>
						<img src="img/contacts.jpg" alt="contatcs img" />
					</div>
					<div className='contacts__right'>

						<div className='contacts__common-info'>
							<h2 className="h2 contacts__heading">We take orders <span>24/7</span></h2>
							<p className="contacts__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
							<p className="contacts__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
						</div>

						<div className='contacts__contact-info'>
							<h2 className="h2 contacts__heading">Our phones</h2>
							<p className="contacts__phone">+38(050) 274 45 45</p>
							<p className="contacts__phone">+38(063) 274 45 45</p>
							<p className="contacts__phone">+38(097) 274 45 45</p>
						</div>

					</div>




				</div>

			</div>

		</section>
	);
}

export default memo(ContactsSection);