import "./WelcomeSection.scss";
import Icon from '../Icon';
import { memo } from 'react';

function WelcomeSection() {

    return (
        <section className='welcome'>

            <div className='container'>

                <div className='welcome__content'>

                    <h1 className='welcome__heading'>Welcome to <span>musica,</span> check out our latest albums</h1>

                    <div className='welcome__proposals'>
                        <div className='welcome__proposal'>
                            <div className='welcome__proposal-heading'>
                                <Icon color='#fff' type='album' />
                                <h3>CHECK OUR CD COLLECTION</h3>
                            </div>
                            <p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
                        </div>
                        <div className='welcome__proposal welcome__proposal--colored'>
                            <div className='welcome__proposal-heading'>
                                <Icon color='#fff' type='headphones' />
                                <h3>LISTEN BEFORE PURCHASE</h3>
                            </div>
                            <p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
                        </div>
                        <div className='welcome__proposal'>
                            <div className='welcome__proposal-heading'>
                                <Icon color='#fff' type='notebook' />
                                <h3>UPCOMING EVENTS</h3>
                            </div>
                            <p>Donec pede justo, fringilla vel, al, vulputate  eget, arcu. In </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default memo(WelcomeSection);