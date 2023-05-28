import Header from "../../../../components/Header/Header.js"
import LineChart from "../../../../components/lineChart/LineChart.js"
import DoughnutChart from "../../../../components/doughnutChart/Doughnut.js"
import './Overview.scss'
import { useState, useEffect } from "react"
import data from '../../../../data/dashboard.json' 
import { Tooltip } from "@material-ui/core"

export default function  OverView() { 

    let range = data
    let [selected,setSelected] = useState(range)

    useEffect(() => { 
        let currData = selected.find(curr => curr.selected).data
        setInfoBox(currData)
    },[selected])

    let currData = selected.find(curr => curr.selected).data
    let [infoBox, setInfoBox] = useState(currData)
    function setRange(txt) { 
      range =  range.map((r) => { 
            if(r.text === txt )
            {
                r.selected = true
            
            }
            else { 
                r.selected = false;
            }
            return r;
        })
        setSelected(range);
    }
    
    function setInfoBoxSelected(id) { 
        let data = JSON.parse(JSON.stringify(infoBox))
       let key = Object.keys(data)
       key.forEach((k) => {
        if (k === id)
        {
            data[k].selected = true;
        }
        else { 
        data[k].selected = false;
        }
       })
       setInfoBox(data);

    }


    return <div className="overview-section">
        <Header />
        <hr />
         <div className='overview-landing'>
           <div className='header'>

            <div className='title'>
                Project Statistic 
           <Tooltip title="Detailed project statistics" arrow="true" placement="right">
            <i className='bi bi-question-circle-fill' style={{color : '#7166F9', paddingLeft : '10px'}}></i>
            </Tooltip>
            </div>
            <ul className='range-select'>
                {       
                    selected.map((r) => { 
                        return  <li className='range-item'>
                        <div className='range-btn' style={r.selected ? {backgroundColor : '#7166F9', color : 'white'} : {}} 
                        onClick={() => setRange(r.text)}>
                            {r.text}
                        </div>
    
                    </li>
                    })
                }
               
                
            </ul>
            
           </div>

           <div className='content container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='info-block'>
                    <div className='info-header' style={{alignItems : 'center'}}>
                       <div className='title'> Total Visits</div>
                    <div  style={{fontSize : '34px', color : '#7166F9'}}>
                        42,43M
                    </div>
                    </div> 
                    <hr />
                    <div className='info-content'    style={{padding : '5px'}}>
                       <LineChart currData = {currData}/>
                    </div>
                   

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                         {/* Bounce Rate info box */}
                        <div className='col-md-6'>
                        <div className={infoBox.bounceRate.selected ? 'info-block curr' : 'info-block'} id='bounceRate' onClick={() => setInfoBoxSelected('bounceRate')}>
                            <div className='header' style={{justifyContent : 'space-around'}}>
                                <i className='fa-solid fa-chart-column info-icons' style={infoBox.bounceRate.selected ?{
                                    color : 'white'
                                } :  {} }></i>
                                <div>
                                {
                                    infoBox.bounceRate.changeRate > 0 ? <i class="bi bi-caret-up-fill" style={{color : 'lightgreen'}}></i> : <i class="bi bi-caret-down-fill" style={{color : 'red'}}></i>
                                } {Math.abs(infoBox.bounceRate.changeRate) + '%'} 
                                </div>
                            </div>
                            <div className='info-content'>
                                <div className="info-txt">
                                    
                                
                                <h1>{infoBox.bounceRate.value}%</h1>
                                <div className="info-subtxt">

                                   <div> {
                                       infoBox.bounceRate.title
                                    } </div> 
                                    <Tooltip title="The percentage of visitors to a particular website who navigate away from the site after viewing only one page." arrow="true">
                                     <i className='bi bi-question-circle-fill info-icons' style= {infoBox.bounceRate.selected ?{color : 'white'} :  {}} ></i> 
                                     </Tooltip>
                                </div>
                                </div>
                        
                                
                            </div>

                        </div>
                        </div>

                        {/* Pages per visit info box */}
                        <div className='col-md-6'>
                        <div className={infoBox.pagesPerVisit.selected ? 'info-block curr' : 'info-block'} onClick={() => setInfoBoxSelected('pagesPerVisit')}>
                            <div className='header' style={{justifyContent : 'space-around'}}>
                            <i class="fa-solid fa-calendar-days info-icons" style={infoBox.pagesPerVisit.selected ? {
                                color : 'white'
                            } : {}}></i>                                <div>
                                    {}
                                </div>
                            </div>
                            <div className='info-content'>
                                <div className="info-txt">
                                    
                                
                                <h1>{infoBox.pagesPerVisit.value}%</h1>
                                <div className="info-subtxt">

                                   <div> {infoBox.pagesPerVisit.title} </div>  
                                   <Tooltip title="Measures the average number of pages visitors view on a site within a single session" arrow="true">                                    
                                   <i className='bi bi-question-circle-fill info-icons' style= {infoBox.pagesPerVisit.selected ?{color : 'white'} :  {}} ></i>
                                   </Tooltip>

                                </div>
                                </div>
                        
                                
                            </div>      

                        </div>
                        </div>
                    </div>
                    <div className='row'>
                         {/* Total Monthly visit info box */}
                        <div className='col-md-6'>
                        <div className={infoBox.totalMonthlyVisit.selected ? 'info-block curr' : 'info-block'} onClick={() => setInfoBoxSelected('totalMonthlyVisit')}>
                            <div className='header' style={{justifyContent : 'space-around'}}>
                            <i class="bi bi-person-fill info-icons" style={infoBox.totalMonthlyVisit.selected ? {
                                color : 'white'
                            }: {}}></i>
                                <div>
                                {
                                    infoBox.totalMonthlyVisit.changeRate > 0 ? <i class="bi bi-caret-up-fill" style={{color : 'lightgreen'}}></i> : <i class="bi bi-caret-down-fill" style={{color : 'red'}}></i>
                                } {Math.abs(infoBox.totalMonthlyVisit.changeRate) + '%'} 
                                </div>
                            </div>
                            <div className='info-content'>
                                <div className="info-txt">
                                    
                                
                                <h1>{infoBox.totalMonthlyVisit.value}K</h1>
                                <div className="info-subtxt">

                                   <div> {
                                       infoBox.totalMonthlyVisit.title
                                    } </div>  
                                </div>
                                </div>
                        
                                
                            </div>

                        </div>
                        </div>
                        {/* Average Duration info box */}
                        <div className='col-md-6'>
                        <div className={infoBox.averageVisit.selected ? 'info-block curr' : 'info-block'} onClick={() => setInfoBoxSelected('averageVisit')}>
                            <div className='header' style={{justifyContent : 'space-around'}}>
                            <i class="fa-sharp fa-solid fa-hourglass-half info-icons" style={infoBox.averageVisit.selected ? {
                                color : 'white' 
                            } : {}}></i>                                <div>
  {
                                    infoBox.averageVisit.changeRate > 0 ? <i class="bi bi-caret-up-fill" style={{color : 'lightgreen'}}></i> : <i class="bi bi-caret-down-fill" style={{color : 'red'}}></i>
                                } {Math.abs(infoBox.averageVisit.changeRate) + '%'}                                 </div>
                            </div>
                            <div className='info-content'>
                                <div className="info-txt">
                                    
                                
                                <h1>{infoBox.averageVisit.value}</h1>
                                <div className="info-subtxt">

                                   <div> {
                                       infoBox.averageVisit.title
                                    } </div>  
                                </div>
                                </div>
                        
                                
                            </div>

                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='row'>
            <div className='col-md-6'>
                   <TrafficSourcesInfoBox />
                </div>

                <div className='col-md-6'>
              

                                    <TrafficSourcesInfoBox />
                    </div>
                </div>
                
                
            </div>

            
           </div>
    </div>
}


function TrafficSourcesInfoBox() { 
    return <div className='info-block'>
    <div className='info-header'>
       <div className='title'> Traffic Sources</div>
    </div> 
    <hr />
    <div className='info-content'>
        
        <table className="custom-table">
<thead className="tableHead">
<tr>
<th>
  <div style={{
    background : "green",
    height : "1rem",
    width : "1rem"
  }}></div>  source</th>
<th>Traffic Source (%)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direct</td>
<td>10</td>
</tr>
<tr>
<td>Search</td>
<td>10</td>
</tr>
</tbody>
</table>

           
            
      
        <DoughnutChart></DoughnutChart>
    </div>

    </div>
}