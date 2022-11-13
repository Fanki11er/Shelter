export const theme: Theme = {
  colors: {},
  fontSizes: {},
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
  colors: {};
  gradients: {
    mainPinkGRadient: string;
  };
  fontSizes: {};

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};
