import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  //Garante que o espaço superior cubra o "notch";
  //ou tenha no máximo o tamanho de spacing.s24
  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
}
