import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Components/Navegacion/Navegacion';
import ProviderSaldo from './Contexto/ProviderSaldo';

export default function App() {
  return (

    <ProviderSaldo>

      <View style={styles.container}>
     
      <Navegacion></Navegacion>
    </View>
    </ProviderSaldo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
