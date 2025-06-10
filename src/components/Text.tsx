import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React from 'react';
import {createText} from '@shopify/restyle';

const RSText = createText();
// Criando um componente Text que herda as propriedades de Text do restyle
type RSTextProps = React.ComponentProps<typeof RSText>;
//extraindo o tipo p/ passar para o TextProps

interface TextProps extends RSTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold = false,
  italic = false,
  semibold = false,
  ...rSTextProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, italic, semibold);
  return (
    <RSText
      color="backgroundContrast" //cor default do texto. Sempre usar a cor contraste do tema p/ alterar de acordo com modo claro e escuro
      style={[$fontSizes[preset], {fontFamily: fontFamily}, style]}
      {...rSTextProps}>
      {children}
    </RSText>
  );
}

//Entender pq algumas funcoes fora do componente

//função para previnir bug do android
function getFontFamily(
  bold: boolean,
  italic: boolean,
  semibold: boolean,
): string {
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semibold && italic:
      return $fontFamily.mediumItalic;
    case semibold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

//Record aceita dois mapas de interface
//cifrão padrão para variaveis de estilo
export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
