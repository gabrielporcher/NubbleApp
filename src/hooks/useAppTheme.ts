import React from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme/theme";

export function useAppTheme() {
    // para não precisar importar o Theme e useTheme em todos os lugares
    return useTheme<Theme>();
}