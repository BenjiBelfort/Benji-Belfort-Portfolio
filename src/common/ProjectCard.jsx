import PropTypes from 'prop-types'; 
import styles from './ProjectCardStyles.module.css';

const ProjectCard = ({ src, link, h3, label, description, problem, solution }) => {

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
                <p className={styles.description}>{description}</p>
                <p className={styles.problem}>
                    {Array.isArray(problem)
                    ? problem.map((line, index) => <span key={index}>{line}<br /></span>)
                    : problem}
                </p>
                <p className={styles.competence}>Compétences</p>
                <p className={styles.solution}>{solution}</p>
            </div>
        </ContentWrapper>
    );
};

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    h3: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    problem: PropTypes.array.isRequired,
    solution: PropTypes.string.isRequired,
};

export default ProjectCard;
