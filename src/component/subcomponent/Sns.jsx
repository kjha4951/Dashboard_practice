import React from 'react'
import "./all.css"

function Snsevent({ title, value }) {
    return (
        <div className='event' title={title} value={value}>
            <h3>{title}</h3>
            <p className='number'>{value}</p>
        </div>
    )

}

function SnsList({title,value}){
return(
    <div className='ListOftheevents'>
    <div className='title'>{title}</div>
    <div className='value'>{value}</div>
    </div>
    
)
}

function Sns() {
    return (
        <div className='box-container'>
        <h3 className='box-title'>SNS</h3>
        <div className='pink-box'>
        <div className='error'> <Snsevent title={"Error rate"}  value={"12"} /></div>
        <div className='sli'><Snsevent title={"Sli"} value={"00/00"}/></div>
        <div className='disruption'><Snsevent title={"disruption"} value={"5"}/></div>

        </div>

        <div className='AllData'>
         <SnsList title={"Message Published"} value={"2"}/>
         <SnsList title={"Notifications Failed"} value={"125"}/>
         <SnsList title={"Notifications Delivered"} value={"300"}/>

        </div>
        </div>
    )
}

export default Sns
