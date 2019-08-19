import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectRegion } from '../../redux/actions/region/regionActions';

const SearchRegion = (props) => { 
  
  const { region } = props;
  
  useEffect(()=>{
    if(region.isRegionSelected){
      const country = region.regionData[0].Country.ID;
      const city= region.regionData[0].EnglishName;
      const key = region.regionData[0].Key;
      const url = "/forecast/" + country + "/" + city + "/"+ key;
      props.history.push(url);
    }    
  },[region.selectedRegion]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = e.target.children[0].value;
    props.selectRegion(q);  
  }
    
  return (        
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}

const mapStateToProps = (state) => {  
  return {
      region: state.region
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectRegion : (q) =>  {dispatch(selectRegion(q))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRegion);