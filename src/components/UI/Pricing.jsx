import React from 'react'
import '../../Styles/pricing.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Pricing() {
    return (
        <section id='pricing-plan'>
            <div className="container exercise_container">
                <div className="exercise_top pricing_top">
                    <h2 className="section-title">Gym <span className="highlight">Pricing</span> Plan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia! Culpa odio ratione a reprehenderit tenetur asperiores cum enim dignissimos, soluta eveniet excepturi ea numquam qui. Voluptates enim delectus ex.</p>
                </div>

                <div className="pricing_wrapper">
                    <div className="pricing_item" data-aos="fade-up" data-aos-duration="1500">
                        <div className="pricing-card-top">
                            <h2 className='section_title'>Regular Member</h2>
                            <h2 className="pricing section_title">$50 <span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Unlimited access to the gym</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Customer Support</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Personal trainer</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Standard options</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>5 classes per week</li>
                            </ul>

                            <button className='register_button'>Join now</button>
                        </div>

                    </div>

                    <div className="pricing_item  pricing_item-02" data-aos="fade-up" data-aos-duration="1800">
                        <div className="pricing-card-top">
                            <h2 className='section_title'>Regular Member</h2>
                            <h2 className="pricing section_title">$50 <span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Unlimited access to the gym</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Customer Support</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Personal trainer</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Standard options</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>5 classes per week</li>
                            </ul>

                            <button className='register_button'>Join now</button>
                        </div>

                    </div>

                    <div className="pricing_item" data-aos="fade-up" data-aos-duration="2000">
                        <div className="pricing-card-top">
                            <h2 className='section_title'>Regular Member</h2>
                            <h2 className="pricing section_title">$50 <span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Unlimited access to the gym</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Customer Support</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Personal trainer</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>Standard options</li>
                                <li><span><CheckBoxOutlineBlankIcon /></span>5 classes per week</li>
                            </ul>

                            <button className='register_button'>Join now</button>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Pricing
