import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    const collapsedHandler = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={collapsedHandler}>Toggle</button>
            {collapsed && <AccordionBody/>}

            {/*            {!props.collapsed && <AccordionBody/>}*/}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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

export default UncontrolledAccordion;