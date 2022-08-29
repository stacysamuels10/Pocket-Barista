const initialState = {
  brewer: {
    name: "",
    brand: "",
    type: "",
  },
  brewerPantry: [
    {
      brewer: {
        name: "Stagg XF",
        brand: "Fellow",
        type: "Fellow Stagg",
      },
    },
    {
      brewer: {
        name: "Barista Express",
        brand: "Breville",
        type: "Espresso Machine",
      },
    },
    {
      brewer: {
        name: "Six Cup Glass Handle CHEMEX",
        brand: "Chemex",
        type: "Chemex",
      },
    },
    {
      brewer: {
        name: "Aeropress Original",
        brand: "Aeropress",
        type: "Aeropress",
      },
    },
    {
      brewer: {
        name: "P3",
        brand: "Espro",
        type: "French Press",
      },
    },
  ],
};

const brewerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default brewerReducer;
