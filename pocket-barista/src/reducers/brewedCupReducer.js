const initialState = {
  brewedCup: {
    setup: {
      coffee: "",
      grinder: "",
      brewer: "",
      dateOfBrew: "",
    },
    brew: {
      groundsAmount: "",
      grindSetting: "",
      waterAmount: "",
      waterTemperature: "",
      bloomTime: "",
      bloomAmount: "",
      brewTime: "",
      espressoType: "",
      rating: "",
    },
    notes: "",
  },
  pastBrews: [],
};

const brewedCupReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default brewedCupReducer;
