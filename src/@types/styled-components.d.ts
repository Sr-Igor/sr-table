import { Theme } from "@/styles/theme";

import * as React from "react";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  // Sobrescrevendo IStyledComponentBase para incluir a prop obrigatória "internal"
}

declare module "react" {
  interface Attributes {
    internal?: Theme;
  }
}
