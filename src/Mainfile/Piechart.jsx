
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Piechart extends Component {

	render() {
		const options = {
		//  theme: "dark2",
			animationEnabled: true,
			// exportFileName: "New Year Resolutions",
			exportEnabled: true,
            margin:5,
            height:390,
           
			title:{
				// text: "Top Categories of New Year's Resolution"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
                // margin:10,
               
				dataPoints: [
					{ y: 70, label: "Direct" },
					{ y: 22, label: "Social" },
					{ y: 18, label: "Referral" },
                    
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				
			/>
		</div>
		);
	}
}
// module.exports = Piechart;  
export default Piechart;         