import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import React from '../../../assets/icons/React.svg'
import Redux from '../../../assets/icons/Redux.svg'
import Css from '../../../assets/icons/Css.svg'
import Js from '../../../assets/icons/Js.svg'

const Skills = () => {
    return (
        <Section>
            <Container title='Skills'>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='flex flex-col items-center justify-center w-20 h-20 m-4'>
                        <img src={React} alt='React' className='w-16 h-16' />
                        <p>React</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-20 m-4'>
                        <img src={Redux} alt='Redux' className='w-16 h-16' />
                        <p>Redux</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-20 m-4'>
                        
                        <p>Html</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-20 m-4'>
                        <img src={Css} alt='Css' className='w-16 h-16' />
                        <p>Css</p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Skills