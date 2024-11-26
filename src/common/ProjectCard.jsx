import PropTypes from 'prop-types'; 
import styles from './ProjectCardStyles.module.css';

const ProjectCard = ({ src, link, h3, p, label }) => {

    let labelClass = "";
    if (label === "projet en ligne") {
        labelClass = styles.online;
    } else if (label === "projet d'étude") {
        labelClass = styles.study;
    } else if (label === "projet en cours") {
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
            <h3>{h3}</h3>
            <p>{p}</p>
        </ContentWrapper>
    );
};

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string,  // link peut être vide ou undefined
    h3: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default ProjectCard;
