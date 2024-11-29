import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ladb from '../../assets/ladb.webp'
import bestOff from '../../assets/bestoff.webp'
import nina from '../../assets/nina.webp'
import booki from '../../assets/booki.webp'
import playdrum from '../../assets/playdrum.webp'


// label = "en ligne" ou "projet d'étude" ou "en cours"

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
                    label="en ligne"
                    description="site..."
                    problem="Cookies..."
                    solution="Recherches..."
                />
                <ProjectCard
                    src={bestOff}
                    link="https://bestoffmusic.fr/"
                    h3="Best Off'"
                    p="Site HTML & CSS."
                    label="en ligne"
                    description="site..."
                    problem="Cookies..."
                    solution="Recherches..."
                />
                <ProjectCard
                    src={nina}
                    link="https://benjibelfort.github.io/Nina-Carducci/"
                    h3="Nina Carducci"
                    p="Site HTML, CSS & JavaScript."
                    label="projet d'étude"
                    description="site..."
                    problem="Cookies..."
                    solution="Recherches..."
                />
                <ProjectCard
                    src={booki}
                    link="https://benjibelfort.github.io/Booki/"
                    h3="Booki"
                    p="Site HTML & CSS."
                    label="projet d'étude"
                    description="site..."
                    problem="Cookies..."
                    solution="Recherches..."
                />
                <ProjectCard
                    src={playdrum}
                    link=""
                    h3="Play Drum"
                    p="Application React."
                    label="en cours"
                    description="site..."
                    problem="kkkkk"
                    solution="Recherches..."
                />
            </div>
        </section>
    )
}

export default Projects
