import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DumbleIcon from '../../assets/img/logo.png';
import React from 'react'
import HeroImg from '../../assets/img/Roman.png'
import '../../Styles/hero.css'


const Hero = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="hero_wrapper">

                    {/* Hero content */}
                    <div className="hero_content">
                        <h2 className='section_title' data-aos="fade-up" data-aos-duration="1500">Exercise is the key to a
                            <span className="highlight"> Healthy </span>
                            lifestyle</h2>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore aliquid hic pariatur quasi repellendus neque eaque qui ratione molestias, inventore laudantium quisquam blanditiis libero et ex sunt rem ipsum.</p>

                        <div className="hero_btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                            <button className='register_button'>Get Started</button>
                            <button className='watch_btn'><span> <PlayArrowIcon /> Watch Video</span></button>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="hero_img">
                        <div className="hero_img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box_img">
                                            <img src={HeroImg} alt="" />
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="heart-rate" data-aos="fade-right" data-aos-duration="1500">
                                <h5>Heart Rate</h5>
                                <span><FavoriteTwoToneIcon /></span>
                                <h6>2597 BPM</h6>
                            </div>

                            <div className="gym_location" data-aos="fade-left" data-aos-duration="1500">
                                <span><LocationOnIcon /></span>
                                <h5>Find a new gym near you</h5>
                            </div>

                            <div className="dumble_icon" data-aos="fade-down" data-aos-duration="1500">
                                <img src={DumbleIcon} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero