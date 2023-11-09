import React from 'react'
import "./all.css"

function FargetEvent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function Fargetlist({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Farget() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>ECS-Fargate-Infra</h2>
            <div className='pink-box'>
                <div className='error'><FargetEvent title={"Error Box"} value={"8"} /></div>
                <div className='sli'><FargetEvent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><FargetEvent title={"Disruptions"} value={"15"} /></div>
            </div>
            <div className='AllData'>
                <Fargetlist title={"Network"}  value={"580 Mb/s"} />
                <Fargetlist title={"Utlilization"} value={"98%"} />
                <Fargetlist title={"Task Exit"} value={"2"} />
                <Fargetlist title={"Task Running"} value={"5"} />

            </div>
        </div>
    )
}

export default Farget;
