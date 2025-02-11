import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyle.module.css';

const Contact = () => {
    const form = useRef();
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation du captcha
        if (![1, 11].includes(parseInt(captchaInput, 10))) {
            setCaptchaError(true);
            return;
        }

        setCaptchaError(false); // Réinitialiser l'erreur si la réponse est correcte

        // Envoi de l'email
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
                    setCaptchaInput(''); // Réinitialiser le champ captcha
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
                    <input type="text" name="name" id="name" placeholder="Nom" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea name="message" id="message" placeholder="Message" required />
                </div>

                {/* Captcha */}
                <div className="formGroup">
                    <p className={styles.jcvd}>
                        Selon <strong>JCVD</strong>, combien font <strong>1</strong> + <strong>1</strong> ?
                    </p>
                    <input
                        type="text"
                        placeholder="Votre réponse"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        required
                    />
                    {captchaError && (
                        <>
                            <p className={styles.error}>
                                Indice : la réponse se trouve {' '}
                                <a
                                    href="https://www.youtube.com/watch?v=FTKV29C7yJE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ici
                                </a>
                            </p>
                        </>
                    )}
                </div>

                <input className="hover btn" type="submit" value="Envoyer" />
            </form>
        </section>
    );
};

export default Contact;
