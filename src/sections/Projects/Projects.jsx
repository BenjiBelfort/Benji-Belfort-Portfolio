import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ladb from '../../assets/ladb.webp'
import bestOff from '../../assets/bestoff.webp'
import nina from '../../assets/nina.webp'
import booki from '../../assets/booki.webp'
// import playdrum from '../../assets/playdrum.webp'


// label = "en ligne" ou "projet d'étude" ou "en cours"

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className="sectionTitle">Projets</h2>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={ladb}
                    link="https://www.lesaiguillesdubaron.fr/"
                    h3="Les Aiguilles du Baron"
                    label="en ligne"
                    description="Site React one page."
                    problem={[
                        "Mise en place d'une gallerie filtrée",
                        "et d'un formulaire de contact.",
                        "Gestion des cookies et SEO."
                      ]}
                    solution="React, HTML, CSS, SEO, EmailJS"
                />
                <ProjectCard
                    src={bestOff}
                    link="https://bestoffmusic.fr/"
                    h3="Best Off'"
                    label="en ligne"
                    description="Site HTML & CSS."
                    problem={[
                        "Un défi :",
                        "mettre en ligne mon premier site"
                      ]}
                    solution="HTML, CSS, hébergement, FileZilla"
                />
                <ProjectCard
                    src={nina}
                    link="https://benjibelfort.github.io/Nina-Carducci/"
                    h3="Nina Carducci"
                    label="projet d'étude"
                    description="Site HTML, CSS & JavaScript."
                    problem={[
                        "Debugger et optimiser !",
                        "Identifier une erreur dans le code JS",
                      ]}
                    solution="Utilisation des outils dev, SEO, performances, Wave"
                />
                <ProjectCard
                    src={booki}
                    link="https://benjibelfort.github.io/Booki/"
                    h3="Booki"
                    label="projet d'étude"
                    description="Site HTML & CSS."
                    problem="Réaliser le front end responsive à partir d'une maquette Figma"
                    solution="HTML, CSS, Figma"
                />
                {/* <ProjectCard
                    src={playdrum}
                    link=""
                    h3="Play Drum"
                    label="en cours"
                    description="Application web React."
                    problem="Mettre en place "
                    solution="Recherches..."
                /> */}
            </div>
        </section>
    )
}

export default Projects
