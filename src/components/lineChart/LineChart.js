import { Line } from 'react-chartjs-2'
import {Chart, scales} from 'chart.js/auto'


export default function LineChart(data) {
    let currData = data.currData
    let          linedata ={
        data :{
                    labels : currData.total_visits.label.slice(0,currData.total_visits.data.length),
                    datasets: [
                        {
                            data : currData.total_visits.data,
                            cubicInterpolationMode: 'monotone',
                            borderColor :  '#7166F9',
                            label : '',    
                        }
                    ]
                },
                options : {
                    responsive : true,
                    scales: {
                        y: {
                        max : 40000000,
                        grid: {
                            display: false, // Set display to false to remove y-axis grid lines
                          },
                          beginAtZero: true,
                          ticks : { 
                            callback : function(value,index,ticks)
                            {
    
                                return value%10000000===0 ? Number(value).toLocaleString('en-US') : ''
                            }
                          }
                        
                        },
                        
    
                },
                    title : false,
                    pointBorderWidth : 0,
                    hoverBorderWidth : 3,
                    hoverRadius : 5,
                    radius : 0,
                    pointHitRadius : 4,
                    pointBorderColor : 'white',
                    pointBackgroundColor :'#7166F9',
                    label : ''           ,
                    title : ''   
                }
            }

return  <Line data ={linedata.data} options = {linedata.options} ></Line>

}