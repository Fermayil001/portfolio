import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import { SocialIcons } from '../../../data/Data';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

    const handleGmailClick = () => {
        const email = 'fermayilhsnv57@gmail.com';
        const subject = 'Portfolio';
        const body = 'Salam, portfolionuzu gördüm...';

        // Gmail Compose URL
        const gmailComposeUrl = new URL('https://mail.google.com/mail/');
        gmailComposeUrl.searchParams.set('view', 'cm');
        gmailComposeUrl.searchParams.set('fs', '1');
        gmailComposeUrl.searchParams.set('to', email);
        gmailComposeUrl.searchParams.set('su', subject);
        gmailComposeUrl.searchParams.set('body', body);

        window.open(gmailComposeUrl.toString(), '_blank', 'noopener,noreferrer');
    };

    return (
        <Section id='contact'>
            <Container title={t("contact.title")}>
                <div className='w-full mx-auto max-w-[544px] space-y-[90px] flex flex-col items-center'>
                    <p className='text-[20px] font-mainfont text-center'>
                        {t("contact.description")}
                    </p>

                    <button
                        onClick={handleGmailClick}
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