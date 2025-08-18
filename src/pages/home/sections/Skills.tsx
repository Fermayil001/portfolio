import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Section from "../../../components/custom/Section";
import Container from "../../../components/custom/Container";
import { skillIcons } from "../../../data/Data";

const Skills = () => {
    const { t } = useTranslation();

    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };

    return (
        <Section id="skills">
            <Container title={t("skills.title")}>
                <motion.div
                    className="grid grid-cols-4 gap-8 mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {skillIcons.map(({ icon: Icon, name }) => (
                        <motion.div
                            key={name}
                            className="flex flex-col items-center "
                            title={name}
                            variants={itemVariants}
                        >
                            <Icon
                                size={70}
                                className="text-csblack dark:text-cswhite drop-shadow-lg drop-shadow-csred/30"
                            />
                            <span>{name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};


export default Skills;