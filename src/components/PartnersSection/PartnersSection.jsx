import "./PartnersSection.scss";
import { memo } from "react";

function PartnersSection() {

    const partnersLogosSrc = [
        'img/partners-logo-1.png',
        'img/partners-logo-2.png',
        'img/partners-logo-3.png',
        'img/partners-logo-4.png',
        'img/partners-logo-5.png',
        'img/partners-logo-6.png',
    ];

    return (
        <section className='partners'>

            <div className='container'>

                <div className='partners__content'>

                    <h2>Our most important publishers</h2>

                    <div className='partners__list'>
                        {partnersLogosSrc.map((logoSrc, id) => {
                            return <div key={id} className={'partners__list-item'}><img className={'partners__item-img'} src={logoSrc} alt={`PartnerLogo ${id}`} /></div>
                        })}
                    </div>

                </div>

            </div>

        </section>
    );
}


export default memo(PartnersSection);