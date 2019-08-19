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

export const drawGraph = (data, unit) => {
    d3.select('svg').selectAll("*").remove();
    // The number of datapoints
    const outerWidth = document.getElementById("HourlyTemperatureGraph").offsetWidth,
        outerHeight = 500;

    const margin = {
        top: 20,
        right: 20,
        bottom: 10,
        left: 50
    };
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight;
    const startPoint = height - margin.top - margin.bottom;
    const aspect = width / height;

    const graph = d3.select('#graphSVG');
    const svg = d3.select('svg').attr('width', width).attr('height', height);
    const g = svg.append("g").attr("transform", "translate(" + margin.left + ", 10)");

    const xScale = d3.scaleTime().rangeRound([0, width]);
    const yScale = d3.scaleLinear().rangeRound([startPoint, 0]);

    xScale.domain(d3.extent(data, (d) => {
        return d.time - 1
    }));

    yScale.domain(d3.extent(data, (d) => {
        return d.temp
    }));

    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(7)
        .tickPadding(5)
        .tickSize(-height);

    const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(8)
        .tickPadding(5)
        .tickSize(-width);

    let line = d3.line().x((d) => {
        return xScale(d.time)
    }).y((d) => {
        return yScale(d.temp)
    }).curve(d3.curveMonotoneX);

    g.append("g")
        .attr("transform", "translate(0," + startPoint + ")")
        .call(xAxis)
        .append("text")
        .attr("fill", "#000")
        .attr('class', 'axis-label x-label')
        .attr("x", (width / 2) - 60)
        .attr("y", margin.top).attr("text-anchor", "end")
        .text("Time");

    g.append("g")
        .call(yAxis)
        .append("text")
        .attr("fill", "#000")
        .attr('class', 'axis-label y-label')
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -(margin.right + margin.bottom))
        .attr("dy", "0.71em").attr("text-anchor", "end")
        .text("Temperature in °" + unit);

    g.append("path").data([data]).attr("d", line).attr("class", "line");

    // Define the div for the tooltip
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    //dots
    g.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", (d) => {
            return xScale(d.time)
        })
        .attr("cy", (d) => {
            return yScale(d.temp)
        }).attr("r", "5")
        .attr("dy", "-5")
        .text((d) => {
            return d.temp;
        }).on("mouseover", (d, index, dataArr) => {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.temp + " °" + unit + " at " + formatTime(d.time))
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        }).on("mouseout", (d, index, dataArr) => {
            tooltip.transition()
                .duration(700)
                .style("opacity", 0);
        });


    d3.select(window).on("resize", () => {
        let targetWidth = graph.node().getBoundingClientRect().width;
        graph.attr("width", targetWidth);
        graph.attr("height", targetWidth / aspect);
    });
}
