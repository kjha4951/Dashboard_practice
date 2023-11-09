import React from 'react'
import "./all.css"

function CloudSearchEvent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function CloudSearchList({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function CloudSearch() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>Cloud Search</h2>
            <div className='pink-box'>
                <div className='error'><CloudSearchEvent title={"Error Box"} value={"00/00"} /></div>
                <div className='sli'><CloudSearchEvent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><CloudSearchEvent title={"Disruptions"} value={"5"} /></div>
            </div>
            <div className='AllData'>
                <CloudSearchList title={"Successful Request"} value={"45"} />
                <CloudSearchList title={"Documents"} value={"15"} />
                <CloudSearchList title={"cloudsearch"} value={"10"} />
                <CloudSearchList title={"Utilization"} value={"5"} />

            </div>
        </div>
    )
}

export default CloudSearch;
