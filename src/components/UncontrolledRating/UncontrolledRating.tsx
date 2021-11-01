import React, {useState} from "react";

export function UncontrolledRating(props: any) {
    const [scoreRating, setScoreRating] = useState(0)
    return (
        <div>
            <Star selected={scoreRating > 0} onClick ={() => setScoreRating(1)}/>
            <Star selected={scoreRating > 1} onClick ={() => setScoreRating(2)}/>
            <Star selected={scoreRating > 2} onClick ={() => setScoreRating(3)}/>
            <Star selected={scoreRating > 3} onClick ={() => setScoreRating(4)}/>
            <Star selected={scoreRating > 4} onClick ={() => setScoreRating(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    onClick: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.onClick}>{props.selected ? <b>Star </b> : 'Star'} </span>
}