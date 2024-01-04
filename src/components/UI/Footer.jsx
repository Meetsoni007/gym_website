import React from 'react'
import '../../Styles/footer.css'
import logo from '../../assets/img/logo.png'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className='footer' data-aos="fade-up" data-aos-duration="1500">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_box">
                        <div className="logo">
                            <div className="logo_img">
                                <img src={logo} alt='Logo' />
                            </div>
                            <h2>FitBody</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi, assumenda voluptate ipsam eligendi rem dicta nobis.</p>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Company</h4>
                        <ul className="footer_links">
                            <li><a href="#">Our Program</a></li>
                            <li><a href="#">Our Plan</a></li>
                            <li><a href="#">Become a member</a></li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us </a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us </a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>

                <p className='Copyright'>Copyright - {year} developed by MeetSoni. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
