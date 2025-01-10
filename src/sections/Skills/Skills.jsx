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
            <h2 className="sectionTitle">Compétences</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="WordPress" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="NodeJS" />
                <SkillList src={checkMarkIcon} skill="Express" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="SEO" />
                <SkillList src={checkMarkIcon} skill="GitHub" />
                <SkillList src={checkMarkIcon} skill="Notion" />
                <SkillList src={checkMarkIcon} skill="Figma" />
            </div>
        </section>
    );
};

export default Skills;
