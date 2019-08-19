import React from 'react';

const PreciptionSummaryCard = (props) => {
  const { forecast, unitSystem } = props;
    const PastHour = forecast.PrecipitationSummary.PastHour[unitSystem];
    const Past3Hours = forecast.PrecipitationSummary.Past3Hours[unitSystem];
    const Past6Hours = forecast.PrecipitationSummary.Past6Hours[unitSystem];
    const Past9Hours = forecast.PrecipitationSummary.Past9Hours[unitSystem];
    const Past12Hours = forecast.PrecipitationSummary.Past12Hours[unitSystem];
    const Past18Hours = forecast.PrecipitationSummary.Past18Hours[unitSystem];
    const Past24Hours = forecast.PrecipitationSummary.Past24Hours[unitSystem];
    
  return(   
    <div className="card" id="PrecipitationSummaryCard">
      <div className="card-body">
        <table className="precipitation-summary-table table">
          <thead>
            <tr>
              <th className="title">Precipitation Summary</th>
              <th>Amount ({PastHour.Unit})</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label">Previous 1 Hour</td>
              <td>
                {PastHour.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 3 Hours</td>
              <td>
                {Past3Hours.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 6 Hours</td>
              <td>
                {Past6Hours.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 9 Hours</td>
              <td>
                {Past9Hours.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 12 Hours</td>
              <td>
                {Past12Hours.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 18 Hours</td>
              <td>
                {Past18Hours.Value}
               </td>
            </tr>
            <tr>
              <td className="label">Previous 24 Hours</td>
              <td>
                {Past24Hours.Value}
               </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  )
};

export default PreciptionSummaryCard;