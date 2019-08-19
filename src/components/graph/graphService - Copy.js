import React from 'react';
import * as d3 from "d3";
import {
  formatTime
} from '../formatData/FormatData';

export const parseGraphData = (data) => {
  let graphData = [];

  data.forEach((item, index) => {
    graphData.push({
      time: new Date(item.DateTime),
      temp: item.Temperature.Value
    })
  });
  return graphData;
}

export const drawGraph = (data) => {

  /*const xValue = d => d.time;
  const xLabel = "Time";
  const yValue = d => d.temp;
  const yLabel = "Temperature";
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  const svg = d3.select('svg');
  const width = 700;
  const height = 600;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  const xAxisG = g.append('g').attr("transform", "translate(0," + innerHeight + ")");
  const yAxisG = g.append('g');

  xAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('x', 100)
    .attr('y', -500)
    .text(xLabel);

  yAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('x', -100)
    .attr('y', 20)
    .text(yLabel)
    .attr("transform", "rotate(-90)");

  const xScale = d3.scaleTime();
  const yScale = d3.scaleLinear();

  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickPadding(15)
    .ticks(5)
    .tickSize(-innerHeight);

  const yAxis = d3.axisLeft()
    .scale(yScale)
    .tickPadding(15)
    .ticks(5)
    .tickSize(-innerWidth);

  const line = d3.line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(d3.curveBasis);*/


  // The number of datapoints
  const outerWidth = document.getElementById("HourlyTemperatureGraph").offsetWidth,
    outerHeight = 700;
  console.log(document.getElementById("HourlyTemperatureGraph").offsetWidth)
  const margin = {
    top: 20,
    right: 20,
    bottom: 10,
    left: 50
  };
  const width = outerWidth - margin.left - margin.right;
  const height = outerHeight;
  const startPoint = height - margin.top - margin.bottom;
  const svg = d3.select('svg').attr('width', width).attr('height', height);
  const g = svg.append("g").attr("transform", "translate(" + margin.left + ", 10)");

  const xScale = d3.scaleTime().rangeRound([0, width]);
  const yScale = d3.scaleLinear().rangeRound([startPoint, 0]);

  let line = d3.line().x((d) => {
    return xScale(d.time)
  }).y((d) => {
    return yScale(d.temp)
  }).curve(d3.curveBasis);

  xScale.domain(d3.extent(data, (d) => {
    return d.time - 1
  }));

  yScale.domain(d3.extent(data, (d) => {
    return d.temp
  }));

  g.append("g").attr("transform", "translate(0," + startPoint + ")").call(d3.axisBottom(xScale)).append("text").attr("fill", "#000").attr('class', 'axis-label').attr("x", width - margin.right - margin.left).attr("y", -margin.top).attr("text-anchor", "end").text("Time");

  g.append("g").call(d3.axisLeft(yScale)).append("text").attr("fill", "#000").attr('class', 'axis-label').attr("transform", "rotate(-90)").attr("y", margin.right).attr("dy", "0.71em").attr("text-anchor", "end").text("Temperature in ° F");

  g.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1.5).attr("d", line);

}
