import styles from './FooterStyles.module.css'

const Footer = () => {
    return (
        <section id="footer" className={styles.container}>
            <p>&copy; 2025 Benjamin Tisserand. <br />
            Tous droits réservés. <br />
            Pics by <a href="https://www.maphotographe.fr/" target='_blank'>Ma Photographe</a>.
            </p>
        </section>
    )
}

export default Footer;
