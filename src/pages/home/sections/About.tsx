import Section from "../../../components/custom/Section"
import Myphoto from '../../../assets/images/1730584660411-02.jpeg'
import Container from "../../../components/custom/Container"
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const PersonalInfo = [
        { key: "email", value: "fermayilhsnv57@gmail.com" },
        { key: "location" },
        { key: "age" },
        { key: "nationality" },
        { key: "education" },
        { key: "degree" }
    ];

    const leftSide = PersonalInfo.slice(0, 3);
    const rightSide = PersonalInfo.slice(3);

    return (
        <Section id="about">
            <Container title={t("about.title")}>
                <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-10 mx-auto w-fit items-center md:items-stretch">
                    <span className=" w-[242px] h-[242px] relative border">
                        <img
                            className="!w-[242px] h-[242px] object-cover absolute top-[-11.44px] left-[-8.71px]"
                            src={Myphoto} alt="Fermayil Hesenov"
                        />
                    </span>
                    <div className="w-full overflow-hidden max-w-[639px] flex flex-wrap justify-between flex-col gap-y-2 md:gap-y-0">
                        <p className="text-sm md:text-base leading-normal lg:leading-[170%] font-normal">
                            {t("about.description")}
                        </p>
                        <div className="flex flex-col lg:flex-row justify-between gap-x-2 px-1">
                            <div className="space-y-2.5">
                                {leftSide.map((item, index) => (
                                    <div className="space-x-5 flex" key={index}>
                                        <span className="w-full block min-w-[80px] max-w-[80px]">
                                            {t(`personalInfo.${item.key}`)}:
                                        </span>
                                        <span>
                                            {item.value ? item.value : t(`personalInfo.values.${item.key}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2.5">
                                {rightSide.map((item, index) => (
                                    <div className="space-x-5 flex" key={index}>
                                        <span className="w-full block min-w-[80px] max-w-[80px]">
                                            {t(`personalInfo.${item.key}`)}:
                                        </span>
                                        <span>
                                            {item.value ? item.value : t(`personalInfo.values.${item.key}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </ Section>
    )
}

export default About