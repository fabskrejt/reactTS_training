import React, {useState} from "react";
/*import pStyle from "./OnOff.module.css"*/

type OnOffPropsType = {
    on: boolean
}

function OnOff (props: OnOffPropsType) {


     let [on,setState] = useState(false)

const onStyle = {
    width: '50px',
    height: '20px',
    display: 'inline-block',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'white'

}
    const offStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'

    }
    return (
        <div >
            <button style={onStyle} onClick={()=>{setState(true)}}>On</button>
            <button style={offStyle} onClick={()=>{setState(false)}}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff