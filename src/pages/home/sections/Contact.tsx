import Section from '../../../components/custom/Section'
import Container from '../../../components/custom/Container'
import { SocialIcons } from '../../../data/Data';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const { i18n } = useTranslation();
    const lang = i18n.language as 'az' | 'en';

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm(
                'service_ezh9buv',   // EmailJS service id
                'template_jnyzmws',  // EmailJS template id
                formRef.current,
                'KQE-sb56MzfBqZL0E'    // EmailJS public key
            ).then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    alert("Mesaj uğurla göndərildi ✅");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Xəta baş verdi ❌");
                }
            );
        }
    };

    return (
        <Section id='contact'>
            <Container title={t("contact.title")}>
                <div className='w-full mx-auto max-w-[544px] space-y-[40px] flex flex-col items-center'>
                    <p className='text-[20px] font-mainfont text-center'>
                        {t("contact.description")}
                    </p>

                    {/* Email form */}
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            name="user_name"
                            placeholder={`${lang === 'az' ? 'Adınız' : 'Your Name'}`}
                            required
                            className="w-full p-2 border placeholder:text-csmain dark:placeholder:text-cswhite rounded-md outline-none border-csmain dark:shadow-csred hover:shadow-sm focus:shadow-sm transition duration-300 dark:border-csred"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder={`${lang === 'az' ? 'Emailiniz' : 'Your Email'}`}
                            required
                            className="w-full p-2 border placeholder:text-csmain dark:placeholder:text-cswhite rounded-md outline-none border-csmain dark:shadow-csred hover:shadow-sm focus:shadow-sm transition duration-300 dark:border-csred"
                        />
                        <textarea
                            name="message"
                            placeholder={`${lang === 'az' ? 'Mesajınız...' : 'Your Message'}`}
                            required
                            className="w-full p-2 border placeholder:text-csmain dark:placeholder:text-cswhite rounded-md outline-none border-csmain dark:shadow-csred hover:shadow-sm focus:shadow-sm transition duration-300 dark:border-csred"
                        />
                        <button
                            type="submit"
                            className='w-full transition-all mt-5 duration-300 cursor-pointer max-w-[180px] h-[43px] bg-csred active:bg-csred/100 hover:bg-csred/80 text-cswhite rounded-md mx-auto'
                        >
                            {t("contact.button")}
                        </button>
                    </form>

                    <div className="flex gap-x-4 items-center justify-center my-15">
                        {SocialIcons.map(({ icon: Icon, url }) => (
                            <a key={url} target='_blank' href={url} className='flex flex-col items-center hover:scale-105 transition-all duration-300'>
                                <Icon size={url === 'https://www.linkedin.com/in/fermayil-hesenov/' ? 25 : 30} className='text-csblack dark:text-cswhite ' />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Contact
