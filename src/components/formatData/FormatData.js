import React from 'react';

export const formatTime = (date) => {
  let d = new Date(date);
  let hr = d.getHours();
  let ampm = "am";
  if (hr === 0) {
    hr = 12;
  }
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  let time = hr + " " + ampm;

  return time;
}

export const formatDate = (date) => {
  let d = new Date(date);
  let month = d.toLocaleString('default', {
    month: 'long'
  });
  let day = d.getDate();
  let formattedDate = month + " " + day;
  return formattedDate;
}

export const epochToHours = (date) => {
  let d = new Date(date*1000);
  var hours = d.getHours();
  return hours;
}

export const parseGraphData = (data) => {
  let graphData = [];
 
  data.forEach((item, index)=>{
    graphData.push(item.Temperature.Value)
  });
  return graphData;
}