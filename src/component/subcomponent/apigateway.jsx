import React from 'react'
import "./all.css"

function CustomEvent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function CustomEventList({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function CustomComponent() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Api Gateway</h2>
            <div className='pink-box'>
                <div className='error'><CustomEvent title={"Error Box"} value={"10"} /></div>
                <div className='sli'><CustomEvent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><CustomEvent title={"Disruptions"} value={"10"} /></div>
            </div>
            <div className='AllData'>
                <CustomEventList title={"4xx Error Rate"} value={"2"} />
                <CustomEventList title={"5xx Error Rate"} value={"5"} />
                <CustomEventList title={"Latency"} value={"5.2ms"} />
                <CustomEventList title={"Total Request"} value={"21"} />
            </div>
        </div>
    )
}

export default CustomComponent;
