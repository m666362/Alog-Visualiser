import React from 'react'
import { Pie, defaults, Bar } from 'react-chartjs-2'
import useTrackedStore from '../store/useTrackedStore'


defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  const state = useTrackedStore()
  return (
    <div>
      <Bar
        data={{
          labels: state.labels,
          datasets: [
            {
              // label: 'Color of world',
              data: state.data,
              backgroundColor: state.backgroundColors,
              borderColor: state.borderColors,
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
      <div>
        <button onClick={()=>{
          state.setData([10, 20, 50, 80, 40, 60, 50, 12, 45, 75, 15])
        }}>Change Data</button>
      </div>
    </div>
  )
}

export default BarChart
