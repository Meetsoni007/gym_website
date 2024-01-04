import React from 'react'
import '../../Styles/exercise.css'
import yoga from '../../assets/img/exercise.png'

function Exercise() {
    return (

        <section id="schedule">
            <div className="container exercise_container">
                <div className="exercise_top">
                    <h2 className="section-title">Benefits of <span className="highlight">Exercise</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia! Culpa odio ratione a reprehenderit tenetur asperiores cum enim dignissimos, soluta eveniet excepturi ea numquam qui. Voluptates enim delectus ex.</p>
                </div>

                {/* === exercise list ==== */}

                <div className="exercise_wrapper">
                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <span className="exercise_icon">
                            <img src={yoga} alt="" />
                        </span>

                        <div className="exercise_content">
                            <h4>Healthy Life</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <span className="exercise_icon">
                            <img src={yoga} alt="" />
                        </span>

                        <div className="exercise_content" >
                            <h4>Healthy Life</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <span className="exercise_icon">
                            <img src={yoga} alt="" />
                        </span>

                        <div className="exercise_content">
                            <h4>Healthy Life</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Exercise
