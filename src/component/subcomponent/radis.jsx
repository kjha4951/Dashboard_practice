import React from 'react'
import "./all.css"

function Radisevent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function Radislist({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function Radiscache() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Radiscache</h2>
            <div className='pink-box'>
                <div className='error'><Radisevent title={"Error Box"} value={"4"} /></div>
                <div className='sli'><Radisevent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Radisevent title={"Disruptions"} value={"15"} /></div>
            </div>
            <div className='AllData'>
                <Radislist title={"Network"} value={"580mb/sec"} />
                <Radislist title={"Evictions"} value={"12"} />
                <Radislist title={"cpu"} value={"21"} />
                <Radislist title={"RuplicationLog"} value={"2"} />
                {/* <Radislist title={"Memory"} value={"45%"} /> */}

            </div>
        </div>
    )
}

export default Radiscache;
