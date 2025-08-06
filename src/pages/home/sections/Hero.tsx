import MyPhoto from '../../../assets/images/1730584660411-02.jpeg'
import { HiChevronDoubleDown } from "react-icons/hi2";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className='bg-cswhite overflow-hidden w-full dark:bg-csblack min-h-[95vh] flex flex-col  items-center justify-center'>
            <div className='flex my-auto flex-col md:flex-row md:pt-0 items-center gap-x-[50px]'>
                <span className="w-[150px] h-[150px] rounded-full overflow-hidden inline-block">
                    <img src={MyPhoto} className="w-full h-full object-contain" alt="" />
                </span>

                <div>
                    <h1 className='text-[40px] text-center md:text-left md:text-[40px] lg:text-[72px] dark:text-cswhite font-mainfont font-extrabold'>Fermayil
                        <span className='text-[#E65F78]'> Hesenov</span>
                    </h1>
                    <h5 className='text-2xl text-center text-light dark:text-cswhite leading-6 font-light'>I design and build things on the internet.</h5>
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