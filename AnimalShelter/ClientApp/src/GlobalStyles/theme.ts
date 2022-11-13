export const theme: Theme = {
  colors: {
    white: "white",
    black: "black",
    orange: "orange",
    backgroundLightGray: "rgba(217, 217, 217, 1)",
  },
  fontSizes: {
    small: "12px",
  },
  gradients: {
    mainPinkGRadient: "45deg, rgba(201, 132, 132, 0.2), rgba(201, 132, 132, 1)",
  },

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
};

export type Theme = {
  colors: {
    white: string;
    black: string;
    orange: string;
    backgroundLightGray: string;
  };
  gradients: {
    mainPinkGRadient: string;
  };
  fontSizes: {
    small: string;
  };

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};
