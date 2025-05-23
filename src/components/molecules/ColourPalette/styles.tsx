import styled, { css } from "styled-components";
import { basicWrapper } from "./mixins";
import { flexColumn } from "../../../styles/mixins";

const generateColorStyles = (colorKey: string, steps = 9, stepSize = 10) =>
  Array.from({ length: steps }, (_, i) => i + 1).reduce(
    (acc, idx) => css`
      ${acc}
      & > :nth-child(${idx}) {
        color: ${(props) => props.theme.colors[colorKey][idx * stepSize]};
      }
    `,
    css``
  );

const basicColorMap = [
  { key: "error", range: [10, 20, 30] },
  { key: "warning", range: [10, 20, 30] },
  { key: "success", range: [10, 20, 30] },
];

const generateBasicWrapperColors = () => {
  let count = 1;
  return basicColorMap
    .map(({ key, range }) =>
      range.map((value) => {
        const rule = css`
          & > :nth-child(${count}) {
            color: ${(props) => props.theme.colors[key][value]};
          }
        `;
        count++;
        return rule;
      })
    )
    .flat();
};

export const ColourPaletteWrapper = styled.div`
  ${flexColumn}
`;

export const MainBackgroundWrapper = styled.div`
  ${flexColumn}
`;

export const SecondaryBackgroundWrapper = styled.div`
  ${flexColumn}
  background-color: ${(props) => props.theme.colors.secondaryBackground};
`;

export const PrimaryWrapper = styled.div`
  ${basicWrapper}
  ${generateColorStyles("primary")}
`;

export const NeutralWrapper = styled.div`
  ${basicWrapper}
  ${generateColorStyles("neutral")}
`;

export const BasicWrapper = styled.div`
  ${basicWrapper}
  ${generateBasicWrapperColors()}
`;
