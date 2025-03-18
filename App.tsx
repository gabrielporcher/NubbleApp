import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ padding: '5%' }}>
      <Text preset='headingLarge' style={{color: 'purple'}}>Testando</Text>
    </SafeAreaView>
  );
}



export default App;
