import React from 'react'
import "./all.css"

function Stepfuctionevent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function StepfunctionList({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Stepunction() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Step Function</h2>
            <div className='pink-box'>
                <div className='error'><Stepfuctionevent title={"Error Box"} value={"5"} /></div>
                <div className='sli'><Stepfuctionevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Stepfuctionevent title={"Disruptions"} value={"5"} /></div>
            </div>
            <div className='AllData'>
                <StepfunctionList title={"Execution Time"} value={"45"} />
                <StepfunctionList title={"Execution Aborted"} value={"10"} />
                <StepfunctionList title={"Execution"} value={"45"} />
                {/* <StepfunctionList title={"total Request"} value={"21"} /> */}

            </div>
        </div>
    )
}

export default Stepunction;
