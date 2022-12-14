const initialState = {
  grinder: {
    name: "",
    brand: "",
  },
  grinderPantry: [
    {
      grinder: {
        name: "OXO Conical Burr Grinder",
        brand: "OXO",
      },
    },
    {
      grinder: {
        name: "Encore Burr Grinder",
        brand: "Baratza",
      },
    },
    {
      grinder: {
        name: "Mignon Notte",
        brand: "Eureka",
      },
    },
    {
      grinder: {
        name: "Ode Grinder",
        brand: "Fellow",
      },
    },
    {
      grinder: {
        name: "Virtuoso+ Burr Grinder",
        brand: "Baratza",
      },
    },
  ],
  grinderCounter: 5,
};

const grinderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GRINDER":
      initialState.grinderPantry.unshift({ grinder: action.payload });
      state = initialState;
      let addedGrinder = (state.grinderCounter += 1);
      return { ...state, grinderCounter: addedGrinder };
    case "SET_NAME":
      return { ...state, grinder: { ...state.grinder, name: action.payload } };
    case "SET_BRAND":
      return { ...state, grinder: { ...state.grinder, brand: action.payload } };
    default:
      return state;
  }
};

export default grinderReducer;
