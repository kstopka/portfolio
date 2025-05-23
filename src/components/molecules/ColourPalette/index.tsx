import React from "react";
import * as S from "./styles";
import { ColourPaletteProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";

import { useColorVariants } from "./useColorVariants";
import { useExtractColorArrays } from "./useExtractColorArrays";

const ColorGroups = ({
  notifications,
  primary,
  neutral,
}: {
  notifications: JSX.Element[];
  primary: JSX.Element[];
  neutral: JSX.Element[];
}) => (
  <>
    <S.BasicWrapper>{notifications}</S.BasicWrapper>
    <S.PrimaryWrapper>{primary}</S.PrimaryWrapper>
    <S.NeutralWrapper>{neutral}</S.NeutralWrapper>
  </>
);

const ColourPalette: React.FC<ColourPaletteProps> = (): JSX.Element => {
  const { theme: themeValue } = useContextState<IAppState>(AppCtx, ["theme"]);
  const isDark = themeValue === "dark";
  const { getColors } = useColorVariants(isDark);

  const {
    primaryDark,
    primaryLight,
    neutralDark,
    neutralLight,
    notifications,
    backgroundDarkColor,
    backgroundLightColor,
    secondaryBackgroundDarkColor,
    secondaryBackgroundLightColor,
  } = useExtractColorArrays();

  const primaryColors = getColors(primaryDark, primaryLight);
  const neutralColors = getColors(neutralDark, neutralLight);
  const notificationColors = getColors(notifications);

  const themeText = isDark
    ? `darkColors: background: ${backgroundDarkColor}, secondaryBackground: ${secondaryBackgroundDarkColor}`
    : `lightColors: background: ${backgroundLightColor}, secondaryBackground: ${secondaryBackgroundLightColor}`;

  return (
    <S.ColourPaletteWrapper>
      {themeText}
      <S.MainBackgroundWrapper>
        <ColorGroups
          notifications={notificationColors}
          primary={primaryColors}
          neutral={neutralColors}
        />
      </S.MainBackgroundWrapper>
      <S.SecondaryBackgroundWrapper>
        <ColorGroups
          notifications={notificationColors}
          primary={primaryColors}
          neutral={neutralColors}
        />
      </S.SecondaryBackgroundWrapper>
    </S.ColourPaletteWrapper>
  );
};
export default ColourPalette;
