import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [ratingValue1, setRatingValue1] = useState<RatingValueType>(0)
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Accordion title={'Меню'} collapsed={true}/>
            <Accordion title={'Инфо'} collapsed={false}/>
            <Rating  value={ratingValue} onClick = {setRatingValue}/>
            <Rating value={ratingValue1} onClick = {setRatingValue1}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <OnOff/>
            <UncontrolledAccordion title={'Меню'}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
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



