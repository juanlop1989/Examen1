import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { SaldoContext } from '../../Contexto/ContextSaldo';



const Inicio = () => {
  const saldoContext = useContext(SaldoContext);
  if (!saldoContext) return null;

  const { saldo, transacciones, depositar } = saldoContext;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco T32351200</Text>
      <Text style={styles.saldo}>Saldo Actual: Lps.{saldo.toFixed(2)}</Text>
      <Button title="Depositar Saldo" onPress={() => depositar(500)} color="#4CAF50" />
      <Text style={styles.subtitle}>Últimas Transacciones</Text>
      <FlatList
        data={transacciones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.transaccion}>{item.tipo} Lps.{item.monto.toFixed(2)}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center'},
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, alignItems: 'center', justifyContent: 'center', borderStyle:"solid"  },
  

 
  saldo: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#555',
  },
  transaccion: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
  },
});

export default Inicio;
