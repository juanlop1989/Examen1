import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SaldoContext } from '../../Contexto/ContextSaldo';


const Historico = () => {

  const saldoContext = useContext(SaldoContext);
  
  if (!saldoContext) return null;

  const { historial } = saldoContext;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Transacciones</Text>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.transaccion}>{item.tipo} Lps.{item.monto.toFixed(2)}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  transaccion: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
  },
});

export default Historico;
