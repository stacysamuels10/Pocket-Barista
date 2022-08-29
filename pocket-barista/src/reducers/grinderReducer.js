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
};

const grinderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default grinderReducer;
