import type { ReactNode } from "react"
import { motion } from "framer-motion";

const Container = ({ children, title, enableMotion = true }: { children: ReactNode, title: string, enableMotion?: boolean }) => {
    return (
        <div className="w-[90%] sm:w-cscontainer overflow-hidden mx-auto flex flex-col justify-center items-center bg-transparent dark:text-cswhite">

            <motion.div
                initial={{ opacity: 0, y: 0, zIndex: 0 }}
                whileInView={{ opacity: 1, y: -50 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="mt-[120px] mb-[0px] lg:mb-[20px]">
                    <h2 className=" h-[65px] flex items-center font-mainfont text-3xl lg:text-5xl dark:text-cswhite text-black font-extrabold">{title}</h2>
                    <div className="w-[60px] h-1 mx-auto mt-3 bg-csred"></div>
                </div>
            </motion.div>

            {enableMotion ? (
                <motion.div
                    initial={{ opacity: 0, scale: 1.5, zIndex: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full mx-auto h-full"
                >
                    {children}
                </motion.div>)
                : (
                    <div className="w-full mx-auto h-full">
                        {children}
                    </div>
                )
            }
        </div>
    )
}

export default Container