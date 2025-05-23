import React, { useCallback } from "react";

export function useColorVariants(isDark: boolean) {
  const paragraph = (value: string) => (
    <p>
      {value} <span>{value}</span>
    </p>
  );
  const getColors = useCallback(
    (darkArr: string[], lightArr?: string[]) => {
      return darkArr.map((color, index) => (
        <div key={index}>
          {isDark || !lightArr ? paragraph(color) : paragraph(lightArr[index])}
        </div>
      ));
    },
    [isDark]
  );

  return { getColors };
}
