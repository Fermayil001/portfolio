import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className='w-full flex items-center text-cswhite justify-center text-base font-mainfont h-[57px] bg-csblack'>
            {t("hero.name")}<span className='text-csred mx-1'>{t("hero.surname")}</span> - 2025
        </div>
    )
}

export default Footer