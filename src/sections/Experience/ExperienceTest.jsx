import { useState } from "react";
import "./ExperienceTestStyles.css"

const ExperienceTest = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section id="experience" className="qualification section">
            <h1 className="sectionTitle">Expérience</h1>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                            Formation
                        </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                        >
                            Expérience
                        </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div className="qualification__dataLeft">
                                <h4 className="qualification__title">Développeur web</h4>
                                <span className="qualification__subtitle">OpenClassrooms et texte + long</span>
                                <div className="qualification__calender">
                                    Mars à décembre 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h4 className="qualification__title">Développement personnel</h4>
                                <span className="qualification__subtitle">CJD</span>
                                <div className="qualification__calender">
                                    depuis 2015
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h4 className="qualification__title">BTS Communication des Entreprises</h4>
                                <span className="qualification__subtitle">Strasbourg</span>
                                <div className="qualification__calender">
                                    1999
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h4 className="qualification__title">BAC Vente Action Marchande</h4>
                                <span className="qualification__subtitle">Belfort</span>
                                <div className="qualification__calender">
                                    1997
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div
                        className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div>
                                <h4 className="qualification__title">Responsable Commercial</h4>
                                <span className="qualification__subtitle">EMBAL PLUS</span>
                                <div className="qualification__calender">
                                    2018 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h4 className="qualification__title">Dirigeant d&apos;entreprise</h4>
                                <span className="qualification__subtitle">EMBAL PLUS</span>
                                <div className="qualification__calender">
                                    2010 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h4 className="qualification__title">Web dev</h4>
                                <span className="qualification__subtitle">EMBAL PLUS</span>
                                <div className="qualification__calender">
                                    2001 - 2010
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h4 className="qualification__title">Service militaire</h4>
                                <span className="qualification__subtitle">Colmar</span>
                                <div className="qualification__calender">
                                    2000 - 2001
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceTest
