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
  pastCoffeeBags: [
    {
      bagOfCoffee: {
        about: {
          name: "Holler Mountain",
          roaster: "Stumptown",
          origin: "East Africa",
          rating: "4",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Medium",
          beanProcess: "Washed",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Mid-range, consistent quality, lacking fruit notes",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Cold Brew Reserve",
          roaster: "Stone Street Coffee",
          origin: "Colombia",
          rating: "4",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Dark",
          beanProcess: "Washed",
          bagAmount: "16oz",
          roastDate: "8/29/2022",
        },
        notes: "Great for cold brew",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Black Cat Espresso",
          roaster: "Intelligentsia",
          origin: "Columbia",
          rating: "3",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Dark",
          beanProcess: "Washed",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Great for espresso",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Konga",
          roaster: "Irving Farm",
          origin: "Ethiopia",
          rating: "5",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Light",
          beanProcess: "Natural",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Best light and floral tasting. Great for pour over",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Stoker",
          roaster: "Tandem",
          origin: "Colombia",
          rating: "5",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Medium",
          beanProcess: "Honey",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Medium and fruity",
      },
    },
  ],
  counter: 0,
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default coffeeReducer;
