import React from 'react';

const TemperatureSummaryCard = (props) => {
  const { forecast, unitSystem } = props;
  const past6HourRangeMaximum = forecast.TemperatureSummary.Past6HourRange.Maximum[unitSystem];
  const past6HourRangeMinimum = forecast.TemperatureSummary.Past6HourRange.Minimum[unitSystem];
  const past12HourRangeMaximum = forecast.TemperatureSummary.Past12HourRange.Maximum[unitSystem];
  const past12HourRangeMinimum = forecast.TemperatureSummary.Past12HourRange.Minimum[unitSystem];
  const past24HourRangeMaximum = forecast.TemperatureSummary.Past24HourRange.Maximum[unitSystem];
  const past24HourRangeMinimum = forecast.TemperatureSummary.Past24HourRange.Minimum[unitSystem];
    
  return(   
    <div className="card" id="TemperatureSummaryCard">
      <div className="card-body">
        <table className="temperature-summary-table table">
          <thead>
            <tr>
              <th className="title">Temperature Summary</th>
              <th>HI/LO(&deg; {past6HourRangeMaximum.Unit})</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label">Previous 6 Hours</td>
              <td>{past6HourRangeMaximum.Value}&deg;/{past6HourRangeMinimum.Value}&deg;</td>
            </tr>
            <tr>
              <td className="label">Previous 12 Hours</td>
              <td>{past12HourRangeMaximum.Value}&deg;/{past12HourRangeMinimum.Value}&deg;</td>
            </tr>
            <tr>
              <td className="label">Previous 24 Hours</td>
              <td>{past24HourRangeMaximum.Value}&deg;/{past24HourRangeMinimum.Value}&deg;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default TemperatureSummaryCard;