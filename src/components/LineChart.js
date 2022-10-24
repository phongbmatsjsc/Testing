
import React from 'react';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
// eslint-disable-next-line
import Chart from 'chart.js/auto'
Chart.register(zoomPlugin)

function LineChart({chartData}) {

    const optionsChart = {
        responsive: true,
        elements: {
            point: {
                radius: 1,
            },
        },
        y: {
            min: 1,
            max: 1000,
            ticks: {
                color: "rgba(200, 0, 0, 1)"
            },
            grid: {
                color: "rgba(200, 0, 0, 1)"
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Demand Line Chart',
            },
            legend:{
                display:true
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: "x",
                    speed: 100
                },
                pan: {
                    enabled: true,
                    mode: "x",
                    speed: 100
                }
          },
        },
    }
    
    return (
        <Line 
            data={chartData} 
            type='line'
            options={optionsChart}
        />
    );
}

export default LineChart;

