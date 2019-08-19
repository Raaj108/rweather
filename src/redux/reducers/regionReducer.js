const initState = {
  regionData: [],
  selectedRegion: "",
  isRegionSelected: false,
  regionErrors: null
}

const regionReducer = (state = initState, action) => {

  switch (action.type) {
    case "SELECT_REGION":
      return {
        ...state,
        selectedRegion: action.selectedRegion,
          isRegionSelected: true,
          regionData: action.regionData,
          regionErrors: null
      };
    case "SELECT_REGION_ERR":
      return {
        ...state,
        selectedRegion: "",
          regionData: [],
          isRegionSelected: false,
          regionErrors: action.err
      };
    default:
      return state;
  }

}

export default regionReducer;
