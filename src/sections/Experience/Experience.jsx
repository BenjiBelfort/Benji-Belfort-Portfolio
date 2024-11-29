import { useState } from "react";
import styles from "./ExperienceStyles.module.css";

const Experience = () => {
  const [isShifted, setIsShifted] = useState(false); // État pour déterminer la position de "contenu"

  const togglePosition = () => {
    setIsShifted((prev) => !prev); // Alterne entre position initiale et décalée
  };

  return (
    <div className={styles.container}>

    <h1 className="sectionTitle">Parcours</h1>

      {/* Cadre affichant une partie de "contenu" */}
      <div className={styles.frame}>
        {/* Contenu qui se déplace */}
        <div className={`${styles.contenu} ${isShifted ? styles.shifted : ""}`}>
            <div className={styles.part}>
                <h3 className={styles.threeTitle}>Formation</h3>

                <div className={styles.content}>
                    {/* Formation 1 à gauche */}
                    <div className={styles.data}>
                        <div className={styles.experienceLeft}>
                            <h4 className={styles.workTitle}>Développeur Web</h4>
                            <p className={styles.lieu}>OpenClassrooms</p>
                            <p className={styles.date}>Mars à Décembre 2024</p>
                        </div>
                        <div>
                            <span className={styles.point}></span>
                            <span className={styles.ligne}></span>
                        </div>
                    </div>

                    {/* Formation 2 à droite */}
                    <div className={styles.data}>
                        <div></div>
                            <div>
                                <span className={styles.point}></span>
                                <span className={styles.ligne}></span>
                            </div>
                        <div className={styles.experienceRight}>
                            <h4 className={styles.workTitle}>CJD</h4>
                            <p className={styles.lieu}>École du dirigeant</p>
                            <p className={styles.date}>Depuis 2015</p>
                        </div>
                    </div>

                    {/* Formation 3 à gauche */}
                    <div className={styles.data}>
                        <div className={styles.experienceLeft}>
                            <h4 className={styles.workTitle}>BTS Communication des Entreprises</h4>
                            <p className={styles.lieu}>Strasbourg</p>
                            <p className={styles.date}>1999</p>
                        </div>
                        <div>
                            <span className={styles.point}></span>
                            <span className={styles.ligne}></span>
                        </div>
                    </div>

                    {/* Formation 4 à droite */}
                    <div className={styles.data}>
                        <div></div>
                            <div>
                                <span className={styles.point}></span>
                                <span className={styles.ligne}></span>
                            </div>
                        <div className={styles.experienceRight}>
                            <h4 className={styles.workTitle}>BAC Vebte Action Marchande</h4>
                            <p className={styles.lieu}>Belfort</p>
                            <p className={styles.date}>1997</p>
                        </div>
                    </div>
                </div>
            </div>

{/* ----------------------------- EXPERIENCE ----------------------------- */}

            <div className={styles.part}>
                <h3 className={styles.threeTitle}>Expérience</h3>

                <div className={styles.content}>
                    {/* Expérience 1 à gauche */}
                    <div className={styles.data}>
                        <div className={styles.experienceLeft}>
                            <h4 className={styles.workTitle}>Responsable Commercial</h4>
                            <p className={styles.lieu}>EMBAL PLUS</p>
                            <p className={styles.date}>2018 à 2023</p>
                        </div>
                            <div>
                                <span className={styles.point}></span>
                                <span className={styles.ligne}></span>
                            </div>
                        </div>

                    {/* Expérience 2 à droite */}
                    <div className={styles.data}>
                        <div></div>
                            <div>
                                <span className={styles.point}></span>
                                <span className={styles.ligne}></span>
                            </div>
                        <div className={styles.experienceRight}>
                            <h4 className={styles.workTitle}>Dirigeant</h4>
                            <p className={styles.lieu}>EMBAL PLUS</p>
                            <p className={styles.date}>2010 à 2018</p>
                        </div>
                    </div>    

                    {/* Expérience 3 à gauche */}
                    <div className={styles.data}>
                        <div className={styles.experienceLeft}>
                            <h4 className={styles.workTitle}>Multi-postes opérationnels</h4>
                            <p className={styles.lieu}>EMBAL PLUS</p>
                            <p className={styles.date}>2001 à 2010</p>
                        </div>
                        <div>
                            <span className={styles.point}></span>
                            <span className={styles.ligne}></span>
                        </div>
                    </div>

                    {/* Expérience 4 à droite */}
                    <div className={styles.data}>
                        <div></div>
                            <div>
                                <span className={styles.point}></span>
                                <span className={styles.ligne}></span>
                            </div>
                            <div className={styles.experienceRight}>
                                <h4 className={styles.workTitle}>Service Militaire</h4>
                                <p className={styles.lieu}>15.2 Colmar</p>
                                <p className={styles.date}>2000 à 2001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button className={styles.button} onClick={togglePosition}>
        {isShifted ? "Formation" : "Expérience" }
        </button>


    </div>
  );
};

export default Experience;
