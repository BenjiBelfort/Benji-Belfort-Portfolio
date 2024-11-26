import styles from './FooterStyles.module.css'

const Footer = () => {
    return (
        <section id="footer" className={styles.container}>
            <p>&copy; 2024 Benjamin Tisserand. <br />
            Tous droits réservés.
            </p>
        </section>
    )
}

export default Footer;
