import React from 'react'
import CustomComponent from './subcomponent/apigateway'
import "./dashboard.css"
import Browser from './subcomponent/browser'
import Cloudfont from './subcomponent/Cloudfont'
import Stepunction from './subcomponent/Stepfunction'
import CloudSearch from './subcomponent/CloudSearch'
import Farget from './subcomponent/ECS-Fargate-Infra'
import Sns from './subcomponent/Sns'
import AWSSQS from './subcomponent/AWS'
import Lambda from './subcomponent/Lambda'
import Radiscache from './subcomponent/radis'
import Rdscluster1 from './subcomponent/RDS'

function Dashboard() {
  return (
    
    <div className='dashboardfront'>
      <div className='Mainheader'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                </svg>
        <p className='heading'>Front-end</p>
        <div className='Line'>
         <p>CloudFront</p>
         <p>API Gateways</p>
         <p>Browser</p>
        </div>
      </div>

      

    <div className='nameofitems'>
      <CustomComponent/>
      <Browser/>
      <Cloudfont/>
    </div>
    <br/>
    <div className='Mainheader1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                </svg>
        <p className='heading1'>Middeware</p>
        <div className='Line1'>
         <p>Step Function</p>
         <p>Aws SOS</p>
         <p>SNS</p>
         <p>Cloud Search</p>
         <p>Lambda</p>
         <p>ECS-Fargate-Infra</p>



        </div>
      </div>
      <div className='nameofitems'>
      <Stepunction/>
      <CloudSearch/>
      <Farget/>
      <Sns/>
      <AWSSQS/>
      <Lambda/>
    </div>
    <br/>
    <div className='Mainheader1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                </svg>
        <p className='heading1'>Backend</p>
        <div className='Line1'>
         <p>Redis Cache</p>
         <p>RDS Cluster</p>
         <p>AWS SES</p>
        


        </div>
      </div>

      <div className='nameofitems'>
       <Radiscache/>
       <Rdscluster1/>
    </div>

    </div>
  )
}

export default Dashboard
