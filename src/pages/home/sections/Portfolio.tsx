import { useTranslation } from "react-i18next";
import Container from "../../../components/custom/Container"
import Section from "../../../components/custom/Section"
import { portfolioData, type PortfolioData } from "../../../data/Data"
import Slider from "react-slick";


const Portfolio = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language as 'az' | 'en';

  const isMobile = window.matchMedia("(max-width: 800px)").matches;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    /*    responsive: [
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         }
       ] */
  };

  return (
    <Section id='portfolio'>
      <Container title='Portfolio' enableMotion={false}>
        <div className="w-full h-full">
          <Slider {...settings} className="pb-9">
            {
              portfolioData.map((item: PortfolioData, index) => (
                <div key={item.url} className="w-full min-h-[693px] border px-6 pt-6 pb-7 bg-cswhite dark:bg-csblack rounded-xl shadow-xl/30 shadow-csred/80">
                  <img src={item.imgUrl} alt="" className="w-[385px] h-[215px] object-contain mx-auto  " />
                  <h5 className="font-mainfont cursor-default py-4 text-2xl font-semibold text-csred hover:text-csred/85"><a href={item.url}>{item.name}</a></h5>
                  <p className="text-lg mb-5 cursor-default font-mainfont text-csblack dark:text-cswhite">{item.description[lang]}</p>
                  <span className="text-sm cursor-default font-mainfont text-csblack dark:text-cswhite">
                    <span className="text-sm mr-2 cursor-default font-semibold font-mainfont text-csblack dark:text-cswhite">{lang === 'az' ? 'İstifadə olunan texnologiyalar:' : 'Tech stack:'}</span>
                    {item.techStack}
                  </span>
                  {
                    index === 0 && (
                      <div className="text-sm opacity-0">
                        dssadas
                      </div>
                    )
                  }
                </div>
              ))
            }
          </Slider>
        </div>
      </Container>
    </Section>
  )
}

export default Portfolio