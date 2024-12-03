import PropTypes from 'prop-types'; 
import styles from './ProjectCardStyles.module.css';
import { MdPlayArrow } from "react-icons/md";

const ProjectCard = ({ src, link, h3, label, soustitre, description, problem, solution, competences }) => {

    let labelClass = "";
    if (label === "en ligne") {
        labelClass = styles.online;
    } else if (label === "projet d'étude") {
        labelClass = styles.study;
    } else if (label === "en cours") {
        labelClass = styles.ongoing;
    }

    // Si le lien est vide ou non défini, rendre une div au lieu de l'ancre <a>
    const ContentWrapper = link ? 'a' : 'div';

    return (
        <ContentWrapper
            href={link || undefined}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className={`${styles.projectCard} ${link ? '' : styles.noLink}`}
        >
            <div className={styles.projectImageWrapper}>
                {label && <div className={`${styles.label} ${labelClass}`}>{label}</div>}
                <img className={styles.hover} src={src} alt={`${h3} logo`} />
            </div>
            <div className={styles.projectcontent}>
                <h3>{h3}</h3>
                <p className={styles.description}>{soustitre}</p>
                <p className={styles.problem}>
                    {Array.isArray(description)
                    ? description.map((line, index) => <span key={index}>{line}<br /></span>)
                    : description}
                </p>
                <div className={styles.problemBox}>
                    <div className={styles.problemBoxTitle}>
                        <p>Problème</p>
                        <p>Solution</p>
                    </div>
                    <div className={styles.problemBoxContent}>
                        <div className={styles.problemBoxItem}>
                            <p>{problem}</p>
                        </div>
                        <div className={styles.problemBoxItem}>
                            <MdPlayArrow className={styles.arrow}/>
                        </div>
                        <div className={styles.problemBoxItem}>
                            <p>{solution}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.tagsContainer}>
                    {competences.map((competence, index) => (
                        <span key={index} className={styles.tag}>
                            {competence}
                        </span>
                    ))}
                </div>
            </div>
        </ContentWrapper>
    );
};

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    h3: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    soustitre: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    problem: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    competences: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
