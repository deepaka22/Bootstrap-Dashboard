import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
            height: 360,
            lineThickness: 0.1,
			title:{
				// text: "Monthly Sales - 2017"

			},
			axisX: {
				valueFormatString: "MMM",
                
                theme: "light2",
                margin:15,
               
			},
			axisY: {
				// title: "Sales (in USD)",
				prefix: "$"
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y:  0 },
					{ x: new Date(2017, 1), y: 10000 },
					{ x: new Date(2017, 2), y: 5000 },
					{ x: new Date(2017, 3), y: 15000 },
					{ x: new Date(2017, 4), y: 10000 },
					{ x: new Date(2017, 5), y: 20000 },
					{ x: new Date(2017, 6), y: 15000 },
					{ x: new Date(2017, 7), y: 25000 },
					{ x: new Date(2017, 8), y: 20000 },
					{ x: new Date(2017, 9), y: 30000 },
					{ x: new Date(2017, 10), y: 25000 },
					{ x: new Date(2017, 11), y: 40000 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
// module.exports = App;          

export default LineChart;