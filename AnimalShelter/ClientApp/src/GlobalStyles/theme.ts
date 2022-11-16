export const theme: Theme = {
  colors: {
    white: "white",
    black: "black",
    orange: "orange",
    backgroundLightGray: "rgba(217, 217, 217, 1)",
    frame: "rgba(201, 132,132,1)",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
  },
  gradients: {
    mainPinkGRadient: "45deg, rgba(201, 132, 132, 0.2), rgba(201, 132, 132, 1)",
    mainPinkGradientReversed:
      "-45deg, rgba(201, 132, 132, 1), rgba(201, 132, 132, 0)",
  },

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
  fontFamily: {
    inter: "Inter",
  },
};

export type Theme = {
  colors: {
    white: string;
    black: string;
    orange: string;
    backgroundLightGray: string;
    frame: string;
  };
  gradients: {
    mainPinkGRadient: string;
    mainPinkGradientReversed: string;
  };
  fontSizes: {
    small: string;
    medium: string;
  };

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
  fontFamily: {
    inter: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};
