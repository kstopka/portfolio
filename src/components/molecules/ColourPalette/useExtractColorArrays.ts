import { darkColors, lightColors, baseTheme } from "../../../styles/theme";

type ThemeColors = {
  [key: number]: string;
};

export const useExtractColorArrays = () => {
  const getValues = (colorObj: ThemeColors): string[] =>
    Object.values(colorObj);

  const primaryDark = getValues(darkColors.primary);
  const primaryLight = getValues(lightColors.primary);
  const neutralDark = getValues(darkColors.neutral);
  const neutralLight = getValues(lightColors.neutral);

  const backgroundDarkColor = darkColors.background;
  const backgroundLightColor = lightColors.background;
  const secondaryBackgroundDarkColor = darkColors.secondaryBackground;
  const secondaryBackgroundLightColor = lightColors.secondaryBackground;

  const notifications = [
    ...getValues(baseTheme.colors.error),
    ...getValues(baseTheme.colors.warning),
    ...getValues(baseTheme.colors.success),
  ];

  return {
    primaryDark,
    primaryLight,
    neutralDark,
    neutralLight,
    notifications,
    backgroundDarkColor,
    backgroundLightColor,
    secondaryBackgroundDarkColor,
    secondaryBackgroundLightColor,
  };
};
