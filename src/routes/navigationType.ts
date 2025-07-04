// ARQUIVO PARA ENCONTRAR O TIPO DE NAVEGAÇÃO E O NOME DAS ROTAS NO HOOK DE NAVEGAÇÃO
import {RootStackParamList} from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
