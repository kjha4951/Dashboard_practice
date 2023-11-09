import React from 'react'
import "./all.css"

function Cloudfontevent({ title, value }) {
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

function Cloudfont() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Cloudfornt</h2>
            <div className='pink-box'>
                <div className='error'><Cloudfontevent title={"Error Box"} value={"10"} /></div>
                <div className='sli'><Cloudfontevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Cloudfontevent title={"Disruptions"} value={"10"} /></div>
            </div>
            <div className='AllData'>
                <CustomEventList title={"Cache Hit Ratio"} value={"45"} />
                <CustomEventList title={"Error Rate"} value={"2%"} />
                <CustomEventList title={"Total Bandwidth"} value={"5kb"} />
                <CustomEventList title={"Success"} value={"76%"} />
                {/* <CustomEventList title={"total Request"} value={"21"} /> */}

            </div>
        </div>
    )
}

export default Cloudfont;
