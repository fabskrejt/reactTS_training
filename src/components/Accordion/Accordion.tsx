import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (accordionCollapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

/*type AccordionTitlePropsType = {
    title: string;
    onClick: (accordionCollapsed: boolean) => void
    collapsed: boolean
}*/

function AccordionTitle(props: AccordionPropsType) {
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;