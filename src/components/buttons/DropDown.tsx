import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Aze from '../../assets/icons/Aze.svg'
import Eng from '../../assets/icons/Eng.svg'

interface DropDownProps {
    className?: string;
    onSelect?: (lang: { name: string; value: string }) => void;
    defaultValue?: string;
}

const DropDown = ({ className = "", onSelect, defaultValue = "az" }: DropDownProps) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [selected, setSelected] = useState<{ name: string; value: string; icon: string } | null>(null);

    const selectLanguage = [
        {
            icon: Eng,
            name: "English",
            value: "en",
        },
        {
            icon: Aze,
            name: "Azərbaycan",
            value: "az",
        },
    ];

    useEffect(() => {
        // Başlanğıcda default dəyərlə seçilmiş dil təyin olunur
        const defaultLang = selectLanguage.find(lang => lang.value === defaultValue);
        if (defaultLang) setSelected(defaultLang);
    }, [defaultValue]);

    const handleSelect = (item: { name: string; value: string; icon: string }) => {
        setSelected(item);
        onSelect?.(item);
        setOpenDropDown(false);
    };

    return (
        <div
            className={`
                flex flex-col items-center relative min-w-[100px]
                text-white rounded-[8px] transition-all duration-300 
                ${openDropDown ? "scale-95 z-20" : ""} 
                ${className}
            `}
        >
            <button
                onClick={() => setOpenDropDown((prev) => !prev)}
                className="font-mainfont text-sm py-2 px-3 flex items-center  gap-1 cursor-pointer transition-all duration-300  bg-csred active:bg-csred/100 hover:bg-csred/80 text-cswhite rounded-md"
            >
                <span className="flex gap-x-2">
                    <img className="w-5 object-cover h-5 rounded-full" src={selected?.icon} alt={selected?.name} />
                    {selected?.name ?? "Dil"}
                </span>
                <span
                    className={`transition-transform duration-300 ${openDropDown ? "rotate-180" : ""
                        }`}
                >
                    <IoIosArrowDown size={20} />
                </span>
            </button>

            <ul
                className={`
                    absolute top-[40px] -right-0.5 space-y-2 py-3 rounded-lg bg-[#EAEDF5] 
                    transition-all duration-300 ease-in-out transform z-[99]
                    ${openDropDown ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}
                `}
            >
                {selectLanguage.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(item)}
                        /* onClick={() => {
                            onSelect?.(item);
                            setOpenDropDown(false);
                        }} */
                        className="flex items-center gap-3 px-3 py-1 w-full hover:bg-[#0067FF26] text-sm text-[#122041] font-[Corbel] cursor-pointer font-normal transition-all duration-300 ease-in-out"
                    >
                        <img className="w-5 object-cover h-5 rounded-full" src={item.icon} alt={item.name} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
