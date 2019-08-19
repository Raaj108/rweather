import React from 'react';
import { connect } from 'react-redux';
import { selectUnitSystem } from '../../redux/actions/forecasts/forecastActions';

const UnitSystem = (props) => {  
   
    const handleClick = (e) => {
        e.preventDefault();
        const selectedUnit = e.currentTarget.id;       
        props.selectUnitSystem(selectedUnit);
        addActiveClass(e.currentTarget);
    }
    
    const addActiveClass = (ele) => {
        const activeUnit =  document.getElementsByClassName("unit active")[0];
        activeUnit.classList.remove("active");
        if (!ele.classList.contains("active")) {
            ele.classList.add("active")
        }
    }
    
    return(
         <div id="unitContainer" className="unit-container">
            <span>Select Unit : </span>
            <span id="Imperial" className="active unit" onClick={handleClick}>&deg;F</span>
            <span id="divider">|</span>
            <span id="Metric" className="unit" onClick={handleClick}>&deg;C</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        unitSystem : state.forecast.unitSystem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectUnitSystem : (unitSystem) =>  {dispatch(selectUnitSystem(unitSystem))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitSystem);