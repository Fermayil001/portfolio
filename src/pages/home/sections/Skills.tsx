import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import { skillIcons } from '../../../data/Data'
import { useTranslation } from 'react-i18next'


const Skills = () => {

    const { t } = useTranslation()

    return (
        <Section id='skills'>
            <Container title={t('skills.title')}>
                <div className='grid grid-cols-4 gap-4 mx-auto'>
                    {skillIcons.map(({ icon: Icon, name }) => (
                        <div key={name} className='flex flex-col items-center'>
                            <Icon size={70} className='text-csblack dark:text-cswhite' />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default Skills