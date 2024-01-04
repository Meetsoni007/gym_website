import React from 'react'
import '../../Styles/testimonia.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from 'swiper';
import Avatar from '../../assets/img/Roman.png'

function Testimonia() {
    return (
        <>
            <section>
                <div className="container sliders">
                    <h2 className="section_title">Testimonials</h2>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwipers"
                    >
                        <SwiperSlide>
                            <div className="slide_item">
                                <div className="slide_img-01">
                                    <img src={Avatar} alt="" />
                                </div>
                                <h4>Roman bhai</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi incidunt unde optio quae quidem omnis. Veritatis, maxime, tempore at enim, eos commodi impedit perferendis magni itaque quibusdam harum totam quisquam.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>  <div className="slide_item">
                            <div className="slide_img-02">
                                <img src={Avatar} alt="" />
                            </div>
                            <h4>Roman bhai</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi incidunt unde optio quae quidem omnis. Veritatis, maxime, tempore at enim, eos commodi impedit perferendis magni itaque quibusdam harum totam quisquam.</p>
                        </div></SwiperSlide>
                        <SwiperSlide>  <div className="slide_item">
                            <div className="slide_img-03">
                                <img src={Avatar} alt="" />
                            </div>
                            <h4>Roman bhai</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi incidunt unde optio quae quidem omnis. Veritatis, maxime, tempore at enim, eos commodi impedit perferendis magni itaque quibusdam harum totam quisquam.</p>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonia;