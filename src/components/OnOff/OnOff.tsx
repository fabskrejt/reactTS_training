import React from "react";


export type OnOffPropsType = {
    onClick: (on: boolean) => void
    on: boolean
}


export function OnOff(props:OnOffPropsType) {

    const onStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const offStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'

    }
    return (
        <div>
            <button style={onStyle} onClick={() => props.onClick(!props.on) }>On
            </button>
            <button style={offStyle} onClick={() =>props.onClick(!props.on) }>Off
            </button>
            <div style={indicatorStyle}></div>
        </div>
    )
}

