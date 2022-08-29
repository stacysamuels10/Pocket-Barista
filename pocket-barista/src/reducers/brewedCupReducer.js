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
      brewTime: "",
      rating: "",
    },
    notes: "",
  },
  pastBrews: [
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/29/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/27/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Back Cat Espresso",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/26/2022",
        },
        brew: {
          groundsAmount: "17",
          grindSetting: "8",
          waterAmount: "30g",
          waterTemperature: "208",
          brewTime: "140",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Stoker",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/20/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/17/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
  ],
};

const brewedCupReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default brewedCupReducer;
