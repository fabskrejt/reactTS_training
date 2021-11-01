import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [ratingValue1, setRatingValue1] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Accordion title={'Меню'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*   <Accordion title={'Инфо'} collapsed={false}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue1} onClick={setRatingValue1}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title={'Меню'}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <OnOff on={on} onClick={setOn}/>
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}



