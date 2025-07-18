import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignupScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text onPress={navigateToForgotPasswordScreen} color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button onPress={navigateToSignupScreen} preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}