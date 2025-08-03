import MyPhoto from '../../../assets/images/1730584660411-02.jpeg'
import HeroArrow from '../../../assets/icons/hero-arrow.svg'


const Hero = () => {
    return (
        <div className='bg-[#1F1F1F] min-h-[90vh] flex flex-col gap-y-[205px] items-center justify-center'>
            <div className='flex items-center gap-x-[50px]'>
                <span className="w-[150px] h-[150px] rounded-full overflow-hidden inline-block">
                    <img src={MyPhoto} className="w-full h-full object-contain" alt="" />
                </span>

                <div>
                    <h1 style={{ fontFamily: 'Open Sans' }} className='text-[72px] text-[#FFFFFF] font-extrabold'>Fermayil
                        <span className='text-[#E65F78]'> Hesenov</span>
                    </h1>
                    <h5 className='text-2xl text-light text-[#F7F7F7] leading-6 font-light'>I design and build things on the internet.</h5>
                </div>
            </div>
            <div className='h-[100px] w-[100px] cursor-pointer'>
                <img src={HeroArrow} alt="" />
            </div>
        </div>
    )
}

export default Hero