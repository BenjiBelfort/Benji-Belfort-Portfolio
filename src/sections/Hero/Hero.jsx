import styles from './HeroStyles.module.css';
import heroImgLight from '../../assets/hero-img.webp';
import heroImgDark from '../../assets/hero-img-dark.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gitHubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import linkeDinLight from '../../assets/linkedin-light.svg'
import linkeDinDark from '../../assets/linkedin-dark.svg'

import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/useTheme';

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark;
    const linkeDinIcon = theme === 'light' ? linkeDinLight : linkeDinDark;
    const heroImg = theme === 'light' ? heroImgLight : heroImgDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Benjamin Tisserand" />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>

            <div className={styles.info}>
                <h1>Benjamin<br />Tisserand</h1>
                <h2>Développeur Web</h2>
                <span>
                    <a href="https://github.com/BenjiBelfort" target="_blank">
                        <img src={gitHubIcon} alt="GitHub icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/benjamin-tisserand-432aa259/" target="_blank">
                        <img src={linkeDinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>Passionné par le développement web, je souhaite mettre mon expérience à profit pour créer de nouveaux projets.</p>
                <a href={CV} target="_blank">
                    <button className="hover">Voir mon CV</button>
                </a>
            </div>
        

        </section>
    );
}

export default Hero;
