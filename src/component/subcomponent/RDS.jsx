import React from 'react'
import "./all.css"

function Rdsclusterevent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function Rdslist({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Rdscluster1() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Rdscluster1</h2>
            <div className='pink-box'>
                <div className='error'><Rdsclusterevent title={"Error Box"} value={"4"} /></div>
                <div className='sli'><Rdsclusterevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Rdsclusterevent title={"Disruptions"} value={"15"} /></div>
            </div>
            <div className='AllData'>
                <Rdslist title={"Invocations Success"} value={"2"} />
                <Rdslist title={"Invocations Failed"} value={"15"} />
                <Rdslist title={"Deadletters Error"} value={"10"} />
                <Rdslist title={"Throttles"} value={"5"} />
                {/* <Rdslist title={"total Request"} value={"21"} /> */}

            </div>
        </div>
    )
}

export default Rdscluster1;
