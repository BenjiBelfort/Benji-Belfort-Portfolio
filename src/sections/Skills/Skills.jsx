import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';

import { useTheme } from '../../common/useTheme';

const Skills = () => {
    const { theme } = useTheme();

    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Compétences</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="NodeJS" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="Express" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="GitHub" />
                <SkillList src={checkMarkIcon} skill="SEO" />
                <SkillList src={checkMarkIcon} skill="Notion" />
            </div>
        </section>
    );
};

export default Skills;
