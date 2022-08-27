const initialState = {
  brewer: {
    name: "",
    brand: "",
    type: "",
  },
  brewerPantry: [],
};

const brewerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default brewerReducer;
