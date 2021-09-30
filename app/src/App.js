import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
 const [campaigns, setCampaigns] = useState([]);
 const [yarnLogo, setYarnLogo] = useState('');
 const [yarnCampName, setYarnCampName] = useState('');
 const [yarnPerInstall, setYarnPerInstall] = useState('');

  
    
   useEffect(() => {

     axios({
       method: 'GET',
       url: `https://www.plugco.in/public/take_home_sample_feed`
     })
     .then((response) => {
       console.log('response', response.data)
       setCampaigns(response.data)
       setYarnLogo(response.data.campaigns[1].campaign_icon_url)
       setYarnCampName(response.data.campaigns[1].campaign_name)
       setYarnPerInstall(response.data.campaigns[1].pay_per_install)
     })
   }, []) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>PLUGS</h1>
        <br />
      </header>
      <main>
        <img 
        src={yarnLogo} 
        alt=''
        style={{
          position: 'absolute',
          width: '65px',
          height: '65px',
          left: '38px',
          top: '150px',
          background: 'url(Image.png)',
          borderRadius: '18px',
          fontWeight: 'bold',
        }}
        />
        <div 
        style={{
          width: '178px', 
          height: '23px', 
          position: 'absolute', 
          left:'40px',
          top: '160px',
          }}>
        {yarnCampName} 
        </div>
        <div 
        style={{
          width: '178px', 
          height: '18px', 
          position: 'absolute', 
          left:'70px',
          top: '185px',
          fontFamily: 'SFProText',
          fontSize: '16px',
          lineHeight: '18px',
          letterSpacing: '-.32px',
          color: '#009330',
          }}>
        {yarnPerInstall} Per Install
        </div>
      </main> 
    </div>
  );
}

export default App;
