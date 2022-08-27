const initialState = {
  bagOfCoffee: {
    about: {
      name: "",
      roaster: "",
      origin: "",
      rating: "",
    },
    details: {
      beanType: "",
      roastLevel: "",
      beanProcess: "",
      bagAmount: "",
      roastDate: "",
    },
    notes: "",
  },
  pastCoffeeBags: [],
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default coffeeReducer;
