import React from 'react'
import "./all.css"

function Lambdaevent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function Lambdalist({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Lambda() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Lambda</h2>
            <div className='pink-box'>
                <div className='error'><Lambdaevent title={"Error Box"} value={"12"} /></div>
                <div className='sli'><Lambdaevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Lambdaevent title={"Disruptions"} value={"5"} /></div>
            </div>
            <div className='AllData'>
                <Lambdalist title={"Invocations Success"} value={"2"} />
                <Lambdalist title={"Invocations Failed"} value={"15"} />
                <Lambdalist title={"Deadletters Error"} value={"10"} />
                <Lambdalist title={"Throttles"} value={"5"} />
                {/* <Lambdalist title={"total Request"} value={"21"} /> */}

            </div>
        </div>
    )
}

export default Lambda;
