//Styles
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// React & Hooks
import React, { useState } from "react";

export const getUseServerInsertedHTML = () => {
  try {
    const { useServerInsertedHTML } = require("next/navigation");
    return useServerInsertedHTML;
  } catch {
    return undefined;
  }
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const useServerInsertedHTML = getUseServerInsertedHTML();
  useServerInsertedHTML?.(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
