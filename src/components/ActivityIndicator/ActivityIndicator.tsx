import React from "react";
import {ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps} from "react-native";
import { ThemeColors } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";
import {useAppTheme} from "../../hooks/useAppTheme";

interface Props extends Omit <ActivityIndicatorProps, 'color'> {
    color?: ThemeColors
}

export function ActivityIndicator({color= 'primary'}: Props) {
    const {colors} = useAppTheme()
    return <RNActivityIndicator color={colors[color]} />
}