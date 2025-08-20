import MyPhoto from '../../../assets/images/1730584660411-02.jpeg'
import { HiChevronDoubleDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import AnimatedText from '../../../components/custom/AnimatedText';


const Hero = () => {

    const { t } = useTranslation()

    return (
        <div className='bg-cswhite overflow-hidden w-full dark:bg-csblack min-h-screen flex flex-col  items-center justify-center'>
            <div className='flex my-auto flex-col md:flex-row md:pt-0 items-center gap-x-[50px]'>
                <span className="w-[150px] h-[150px] rounded-full overflow-hidden inline-block">
                    <img src={MyPhoto} className="w-full h-full object-contain" alt="" />
                </span>

                <div>
                    <h1 className='text-[40px] text-center md:text-left md:text-[40px] lg:text-[72px] dark:text-cswhite font-mainfont font-extrabold'>{t("hero.name")}
                        <span className='text-[#E65F78]'> {t("hero.surname")}</span>
                    </h1>
                    <AnimatedText
                        key={t("hero.description")}
                        speed={50}
                        text={t("hero.description")}
                        className="text-2xl italic ml-2 text-center text-light dark:text-cswhite leading-6 font-light"
                    />

                </div>
            </div>
            <motion.div
                animate={{ y: [0, 10, 0] }} // yuxarı-aşağı hərəkət
                transition={{
                    duration: 1.2,
                    repeat: Infinity,       // sonsuz təkrar
                    ease: "easeInOut"
                }}
            >
                <div className='cursor-pointer mx-auto pb-[70px] md:pb-[120px] self-end'>
                    <a href='#about'>
                        <HiChevronDoubleDown size={32} className='text-csblack dark:text-cswhite' />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero