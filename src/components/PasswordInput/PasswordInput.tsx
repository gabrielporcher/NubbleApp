import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecurityTextEntry() {
    setIsSecurityTextEntry(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      rightComponent={
        <Icon
          color="gray2"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecurityTextEntry}
        />
      }
    />
  );
}
