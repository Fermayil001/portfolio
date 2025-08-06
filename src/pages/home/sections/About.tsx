import Section from "../../../components/custom/Section"
import Myphoto from '../../../assets/images/1730584660411-02.jpeg'
import Container from "../../../components/custom/Container"

const About = () => {

    const PersonalInfo = [
        { title: "Email", value: "fermayilhesenov@mail.com" },
        { title: "Location", value: "City, Country" },
        { title: "Age", value: "25" },
        { title: "Nationality", value: "Azerbaijani" },
        { title: "Education", value: "Bachelor's Degree" },
        { title: "Degree", value: "Computer Science" }
    ];

    const leftSide = PersonalInfo.slice(0, 3);
    const rightSide = PersonalInfo.slice(3);

    return (
        <Section id="about">
            <Container title="About Me">
                <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-10 mx-auto w-fit items-center md:items-stretch">
                    <span className=" w-[242px] h-[242px] relative border">
                        <img
                            className="!w-[242px] h-[242px] object-cover absolute top-[-11.44px] left-[-8.71px]"
                            src={Myphoto} alt="Fermayil Hesenov"
                        />
                    </span>
                    <div className="w-full overflow-hidden max-w-[639px] flex flex-wrap justify-between flex-col gap-y-2 md:gap-y-0">
                        <p className="text-sm md:text-base leading-normal lg:leading-[170%] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc bibendum sed.  Donec tincidunt tellus sed libero ultricies, eu semper enim molestie. Etiam lorem quam, tincidunt nec malesuada eu, interdum nec leo. </p>
                        <div className="flex flex-col lg:flex-row justify-between gap-x-2 px-1">
                            <div className=" space-y-2.5">
                                {
                                    leftSide.map((item, index) => (
                                        <div className="space-x-5  flex" key={index}>
                                            <span className="w-full  block min-w-[80px] max-w-[80px]">{item.title}: </span>
                                            <span>{item.value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className=" space-y-2.5">
                                {
                                    rightSide.map((item, index) => (
                                        <div className="space-x-5 flex" key={index}>
                                            <span className="w-full  block min-w-[80px] max-w-[80px]">{item.title}: </span>
                                            <span>{item.value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ Section>
    )
}

export default About