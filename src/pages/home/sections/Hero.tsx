import MyPhoto from '../../../assets/images/1730584660411-02.jpeg'
import { HiChevronDoubleDown } from "react-icons/hi2";



const Hero = () => {
    return (
        <div className='bg-cswhite dark:bg-csblack min-h-[95vh] flex flex-col  items-center justify-center'>
            <div className='flex items-center gap-x-[50px]'>
                <span className="w-[150px] h-[150px] rounded-full overflow-hidden inline-block">
                    <img src={MyPhoto} className="w-full h-full object-contain" alt="" />
                </span>

                <div>
                    <h1 style={{ fontFamily: 'Open Sans' }} className='text-[72px] dark:text-cswhite font-extrabold'>Fermayil
                        <span className='text-[#E65F78]'> Hesenov</span>
                    </h1>
                    <h5 className='text-2xl text-light dark:text-cswhite leading-6 font-light'>I design and build things on the internet.</h5>
                </div>
            </div>
            <div className='h-[100px] w-[100px] cursor-pointer mt-[205px]'>
                <a href='#about'>
                    <HiChevronDoubleDown size={32} className='text-csblack dark:text-cswhite' />
                </a>
            </div>
        </div>
    )
}

export default Hero