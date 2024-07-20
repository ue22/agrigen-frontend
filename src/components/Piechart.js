/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Piechart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Plot A", y: 5, color: "#d3d3d3" },  // Grey color
					{ name: "Plot B", y: 31, color: "#90EE90" },  // Green color
				]
			}]
		}
		return (
		<div className="piechart-data">
			<CanvasJSChart options={options}
				
			/>
			{/* */}
		</div>
		);
	}
}

export default Piechart;
