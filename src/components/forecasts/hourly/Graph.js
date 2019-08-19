import React, { useEffect } from 'react';
import { parseGraphData, drawGraph } from '../../graph/graphService';


const Graph = (props) => {
  
  const { data, unitSystem } = props; 
  const graphData = parseGraphData(data);
  const unit = (unitSystem == "Imperial") ? "F" : "C"; 
  useEffect(()=>{
    drawGraph(graphData,unit);
  },[data])
  
  
  return(
    <div id="HourlyTemperatureGraph" className="graph-container mt-4 mb-4">
      <p className="hourly-table-col-1"><strong>Temperature Graph</strong></p>
      <svg className="graph-svg" id="graphSVG"></svg>
    </div>
  )
}

export default Graph;