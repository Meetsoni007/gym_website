import React from 'react'
import '../../Styles/start.css'
import start from '../../assets/img/start.png'

function Start() {
    return (
        <section id='classes'>
            <div className="container">
                <div className="start_wrapper">
                    <div className="start_img">
                        <img src={start} alt="" data-aos="fade-left" data-aos-duration="1500" />
                    </div>
                    <div className="start_content" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="section_title">Ready to make a <span className="highlight"> change?</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore optio ipsam reiciendis dolore? Consequatur animi ea asperiores, culpa laborum autem vel porro quibusdam. Ipsum corrupti est tempore accusantium, incidunt qui!</p>
                        <button className="register_button">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start
