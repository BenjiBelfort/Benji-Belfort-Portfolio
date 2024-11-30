import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyle.module.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_g942k8k',
                'template_q68wmtp',
                form.current,
                'vX579AdagFxAVIYa6'
            )
            .then(
                () => {
                    alert('Email envoyé avec succès !');
                    e.target.reset();
                },
                (error) => {
                    console.error('Erreur lors de l\'envoi :', error);
                }
            );
    };

    return (
        <section id="contact" className={styles.container}>
            <h2 className="sectionTitle">Contact</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Nom
                    </label>
                    <input type="text" name="name" id="name" placeholder="Nom" required/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea name="message" id="message" placeholder="Message" required/>
                </div>
                <input className="hover btn" type="submit" value="Envoyer"/>
            </form>
        </section>
    );
};

export default Contact;
