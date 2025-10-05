import type { ReactNode } from "react"

const Section = ({ children, id }: { children: ReactNode, id?: string }) => {
    return (

        <section id={id} className="min-h-fit ">
            {children}
        </section >

    )
}

export default Section;
