import * as React from "react"

const SectionWrapper = (Component:any, idName:any) => 
function HOC() {
    return (
        <section 
            className="relative"
        >
            <span className="hash-span" id={idName}></span>
            <div className={`max-w-7xl mx-auto`}>
                <Component />
            </div>
        </section>
    )
}

export default SectionWrapper