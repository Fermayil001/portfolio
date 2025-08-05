import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import { SocialIcons } from '../../../data/Data';

const Contact = () => {

    const handleClick = () => {
        const email = 'fermayilhsnv57@gmail.com';
        const subject = 'Portfolio';
        const body = 'Salam, portfolionuzu gördüm...';

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <Section>
            <Container title='Contact'>
                <div className='w-full max-w-[544px] space-y-[90px] flex flex-col items-center'>
                    <p className='text-[20px] font-mainfont text-center'>
                        I am currently seeking employment, so if you have a job or project offer, or if you need more information, please do not hesitate to contact me.
                    </p>
                    <button
                        onClick={handleClick}
                        className='w-full cursor-pointer max-w-[180px] h-[43px] bg-csred active:bg-csred/80 hover:bg-csred/60 text-cswhite rounded-md'
                    >
                        Contact me with gmail
                    </button>
                    <div className="flex gap-x-4 items-center justify-center">
                        {SocialIcons.map(({ icon: Icon, url }) => (
                            <a key={url} target='_blank' href={url} className='flex flex-col items-center'>
                                <Icon size={url == 'https://www.linkedin.com/in/fermayil-hesenov/' ? 25 : 30} className='text-csblack dark:text-cswhite' />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Contact