const onState =
{
  waterPressuire: false,
  zones: [
    {
      light: 0,
      water: 0
    },
    {
      light: 1,
      water: 0
    },
    {
      light: 1,
      water: 0
    },
    {
      light: 1,
      water: 0
    }
  ]
};

const onStateWaterAll =
{
  waterPressuire: true,
  zones: [
    {
      light: 1,
      water: 1
    },
    {
      light: 1,
      water: 1
    },
    {
      light: 1,
      water: 1
    },
    {
      light: 1,
      water: 1
    }
  ]
};

const offState = {
  waterPressuire: false,
  zones: [
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    }
  ]
};

initState = {
  waterPressuire: 0,
  zones: [
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    },
    {
      light: 0,
      water: 0
    }
  ]
};

module.exports = {onState, offState, onStateWaterAll, initState};
