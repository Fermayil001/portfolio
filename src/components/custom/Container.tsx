import type { ReactNode } from "react"

const Container = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <div className="w-cscontainer mx-auto  flex flex-col justify-center items-center bg-transparent dark:text-cswhite">
            <div className="mt-[120px] mb-[90px]">
                <h2 className="font-extrabold h-[65px] flex items-center font-mainfont text-5xl dark:text-cswhite text-black">{title}</h2>
                <div className="w-[60px] h-1 mx-auto mt-3 bg-csred"></div>
            </div>
            {children}
        </div>
    )
}

export default Container