import React from 'react'
import "./all.css"

function Browserevent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function BrowsereventList({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Browser() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Browser</h2>
            <div className='pink-box'>
                <div className='error'><Browserevent title={"Error Box"} value={"10"} /></div>
                <div className='sli'><Browserevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Browserevent title={"Disruptions"} value={"10"} /></div>
            </div>
            <div className='AllData'>
                <BrowsereventList title={"js Error Rate"} value={"2"} />
                <BrowsereventList title={"CLS"} value={"5.2ms"} />
                <BrowsereventList title={"LCP"} value={"2s"} />
                <BrowsereventList title={"FID"} value={"2ms"} />
            </div>
        </div>
    )
}

export default Browser;
