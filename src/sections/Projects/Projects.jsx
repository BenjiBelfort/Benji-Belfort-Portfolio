import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ladb from '../../assets/ladb.webp'
import bestOff from '../../assets/bestoff.webp'
import nina from '../../assets/nina.webp'
import booki from '../../assets/booki.webp'
import charlotte from '../../assets/Charlotte.webp'
import phil from '../../assets/phil-bullet-art.webp'
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
                    soustitre="Salon de tatouage"
                    description={[
                        "Site vitrine one page, contenant une galerie filtrée et un formulaire de contact.",
                        "Gestion des cookies et SEO."
                    ]}
                    problem="Formulaire de contact"
                    solution="Implémentation EmailJS"
                    competences={["HTML", "CSS", "JavaScript", "React", "SEO", "EmailJS"]}
                />
                <ProjectCard
                    src={charlotte}
                    link="https://parentalite-vivreensemble.fr/"
                    h3="Charlotte Litot-Picard"
                    label="en ligne"
                    soustitre="Parentalité & Vivre ensemble"
                    description={[
                        "Site WordPress"
                    ]}
                    problem="Être autonome dans la gestion de mon site"
                    solution="WordPress"
                    competences={["WordPress", "Plug In"]}
                />
                <ProjectCard
                    src={phil}
                    link="https://www.bullet-art.com/"
                    h3="Phil Bullet art"
                    label="en ligne"
                    soustitre="Bullet artiste"
                    description={[
                        "Site one page avec galerie d'images",
                    ]}
                    problem="Simplifier le style"
                    solution="Tailwind CSS"
                    competences={["React", "Tailwind CSS"]}
                />

                <ProjectCard
                    src={bestOff}
                    link="https://bestoffmusic.fr/"
                    h3="Best Off'"
                    label="en ligne"
                    soustitre="Rock Symphonique"
                    description={[
                        "Site vitrine simple, responsive et",
                        "contenant des liens"
                    ]}
                    problem="Mettre en ligne un site web"
                    solution="Hébergement & FileZilla"
                    competences={["HTML", "CSS", "Hébergement", "FileZilla"]}
                />
                <ProjectCard
                    src={nina}
                    link="https://benjibelfort.github.io/Nina-Carducci/"
                    h3="Nina Carducci"
                    label="projet d'étude"
                    soustitre="Photographe"
                    description={[
                        "Debugger et optimiser !",
                        "Identifier une erreur dans le code JS",
                    ]}
                    problem="Vitesse de chargement du site"
                    solution="Optimisation des images et minification des fichiers"
                    competences={["SEO", "DevTools", "JavaScript"]}
                />
                <ProjectCard
                    src={booki}
                    link="https://benjibelfort.github.io/Booki/"
                    h3="Booki"
                    label="projet d'étude"
                    soustitre="Agence de location"
                    description={[
                        "Réaliser le front end responsive à partir d'une maquette Figma",
                    ]}
                    problem="Responsive design"
                    solution="Media queries"
                    competences={["HTML", "CSS", "Figma", "GitHub"]}
                />
            </div>
        </section>
    )
}

export default Projects
