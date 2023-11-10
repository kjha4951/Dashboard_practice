import React from 'react'
import "./all.css"

function AwsEvent({ title, value }) {
    return (
        <div className="event" title={title} value={value}>
            <h3>{title}</h3>
            <p className="number">{value}</p>
        </div>
    )
}

function Awslist({ title, value }) {
    return (
        <div className='ListOftheevents'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

function AWSSQS() {
    return (
        <div className='box-container'>
            <h2 className='box-title'>AWS SQS</h2>
            <div className='pink-box'>
                <div className='error'><AwsEvent title={"Error Box"} value={"7"} /></div>
                <div className='sli'><AwsEvent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><AwsEvent title={"Disruptions"} value={"5"} /></div>
            </div>
            <div className='AllData'>
                <Awslist title={"Oldest Message"} value={"45"} />
                <Awslist title={"Messsage not visible"} value={""} />
                <Awslist title={"Messages Delayed"} value={"45"} />
                {/* <Awslist title={"Su?ccess"} value={"76%"} /> */}
                {/* <Awslist title={"total Request"} value={"21"} /> */}

            </div>
        </div>
    )
}

export default AWSSQS;
