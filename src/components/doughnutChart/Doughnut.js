import { Doughnut } from "react-chartjs-2";
import { useRef,useEffect } from "react";

import { Chart } from "chart.js";



export default function DoughnutChart(){
    let doughnutChartData = {
        data : { 
            labels : ['Direct', 'Search'],
            datasets : [{
                label : 'hello',
                data : [
                    50,50
                ],
                backgroundColor : ['#E17CFD', '#4CD7F6'
            ]
            }]
        },

        options : {
            cutout : '70%',
            responsive: true,
            maintainAspectRatio: false,
            radius : 50,
            label : false,
            font : {
                size : 20,
                family : 'Arial'
            },
            plugins: {
                legend: {
                  display: false,
                   // Hide the labels on top
                } ,
                              doughnutLabel: {
                    labels: [
                      {
                        text: '50%',
                      }
                    ]
                    }
              },

              
        }}

        let data = doughnutChartData.data;
        let options = doughnutChartData.options
        const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'doughnut',
      data: data,
      options: options,
      plugins: [{
        id: 'doughnutLabel',
        beforeDraw: function (chart) {
          if (chart.config.options.plugins.doughnutLabel) {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const labels = chart.config.options.plugins.doughnutLabel.labels;

            chart.config.options.font = {
                size : 20,
                family : 'Arial'
            }
            console.log(chart.config.options.font)
            labels.forEach(label => {
              ctx.font = `20px Arial`
              ctx.fillStyle = 'black';
              ctx.textBaseline = 'middle';
              const text = label.text;
              const textX = Math.round((chartArea.left + chartArea.right) / 3);
              const textY = Math.round((chartArea.top + chartArea.bottom) / 2);
              ctx.fillText(text, textX, textY, 100);
            });
          }
        }
      }]
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);



    


    return <div style={{height : '110px', width : '110px'}}>
        {/* <Doughnut data = {doughnutChartData.data} options = {doughnutChartData.options}> 
    
    </Doughnut> */}
     <canvas ref={chartRef} />
    </div>
}