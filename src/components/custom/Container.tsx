import type { ReactNode } from "react"
import { motion } from "framer-motion";

const Container = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <div className="w-cscontainer mx-auto flex flex-col justify-center items-center bg-transparent dark:text-cswhite">

            <motion.div
                initial={{ opacity: 0, y: 0, zIndex: 0 }}
                whileInView={{ opacity: 1, y: -50 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="mt-[120px] mb-[90px]">
                    <h2 className="font-extrabold h-[65px] flex items-center font-mainfont text-5xl dark:text-cswhite text-black">{title}</h2>
                    <div className="w-[60px] h-1 mx-auto mt-3 bg-csred"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5, zIndex: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full mx-auto "
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Container