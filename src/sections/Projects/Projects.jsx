import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ladb from '../../assets/ladb.webp'
import bestOff from '../../assets/bestoff.webp'
import nina from '../../assets/nina.webp'


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
                />
                <ProjectCard
                    src={bestOff}
                    link="https://bestoffmusic.fr/"
                    h3="Best Off'"
                    p="Site HTML & CSS."
                />
                <ProjectCard
                    src={nina}
                    link="https://benjibelfort.github.io/Nina-Carducci/"
                    h3="Nina Carducci"
                    p="Site HTML, CSS & JavaScript."
                />
            </div>
        </section>
    )
}

export default Projects
