import { useTranslation } from "react-i18next";
import Container from "../../../components/custom/Container"
import Section from "../../../components/custom/Section"
import { portfolioData, type PortfolioData } from "../../../data/Data"


const Portfolio = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language as 'az' | 'en';

  return (
    <Section id='portfolio'>
      <Container title='Portfolio'>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 min-h-screen">

          {
            portfolioData.map((item: PortfolioData) => (
              <div key={item.url} className="w-full px-6 pt-6 pb-7 bg-cswhite dark:bg-csblack rounded-xl shadow-xl/30 shadow-csred/80 transition duration-300 hover:-translate-y-2">
                <img src={item.imgUrl} alt="" className="w-[385px] h-[215px] object-contain mx-auto  " />
                <h5 className="font-mainfont cursor-default py-4 text-2xl font-semibold text-csred"><a href={item.url}>{item.name}</a></h5>
                <p className="text-lg mb-5 cursor-default font-mainfont text-csblack dark:text-cswhite">{item.description[lang]}</p>
                <span className="text-sm cursor-default font-mainfont text-csblack dark:text-cswhite">
                  <span className="text-sm mr-2 cursor-default font-semibold font-mainfont text-csblack dark:text-cswhite">{lang === 'az' ? 'İstifadə olunan texnologiyalar:' : 'Tech stack:'}</span>
                  {item.techStack}
                </span>

              </div>
            ))
          }

        </div>
      </Container>
    </Section>
  )
}

export default Portfolio