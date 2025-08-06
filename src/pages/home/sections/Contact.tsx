import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import { SocialIcons } from '../../../data/Data';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

    const handleClick = () => {
        const email = 'fermayilhsnv57@gmail.com';
        const subject = 'Portfolio';
        const body = 'Salam, portfolionuzu gördüm...';

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <Section id='contact'>
            <Container title={t("contact.title")}>
                <div className='w-full mx-auto max-w-[544px] space-y-[90px] flex flex-col items-center'>
                    <p className='text-[20px] font-mainfont text-center'>
                        {t("contact.description")}
                    </p>

                    <button
                        onClick={handleClick}
                        className='w-full transition-all duration-300 cursor-pointer max-w-[180px] h-[43px] bg-csred active:bg-csred/100 hover:bg-csred/80 text-cswhite rounded-md'
                    >
                        {t("contact.button")}
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