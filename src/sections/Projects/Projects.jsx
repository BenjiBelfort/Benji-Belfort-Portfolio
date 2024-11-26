import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ladb from '../../assets/ladb.webp'
import bestOff from '../../assets/bestoff.webp'
import nina from '../../assets/nina.webp'
import booki from '../../assets/booki.webp'
import playdrum from '../../assets/playdrum.webp'


// label = "projet en ligne" ou "projet d'étude" ou "projet en cours"

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projets</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={ladb}
                    link="https://www.lesaiguillesdubaron.fr/"
                    h3="Les Aiguilles du Baron"
                    p="Site React one page."
                    label="projet en ligne"
                />
                <ProjectCard
                    src={bestOff}
                    link="https://bestoffmusic.fr/"
                    h3="Best Off'"
                    p="Site HTML & CSS."
                    label="projet en ligne"
                />
                <ProjectCard
                    src={nina}
                    link="https://benjibelfort.github.io/Nina-Carducci/"
                    h3="Nina Carducci"
                    p="Site HTML, CSS & JavaScript."
                    label="projet d'étude"
                />
                <ProjectCard
                    src={booki}
                    link="https://benjibelfort.github.io/Booki/"
                    h3="Booki"
                    p="Site HTML & CSS."
                    label="projet d'étude"
                />
                <ProjectCard
                    src={playdrum}
                    link=""
                    h3="Play Drum"
                    p="Application React."
                    label="projet en cours"
                />
            </div>
        </section>
    )
}

export default Projects
