import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SaldoContext } from '../../Contexto/ContextSaldo';

const Transferencias = () => {
  const saldoContext = useContext(SaldoContext);
  if (!saldoContext) return null;

  const { saldo, transferir } = saldoContext;
  const [monto, setMonto] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [destinatario, setDestinatario] = useState('');

  const realizarTransferencia = () => {
    const montoNumerico = parseFloat(monto);
    if (transferir(montoNumerico)) {
      Alert.alert('Éxito', 'Transferencia realizada correctamente');
    } else {
      Alert.alert('Error', 'Saldo insuficiente para realizar la transferencia');
    }
    setMonto('');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Banco T32351200</Text>

      <Text style={styles.label}>Transferencia</Text>
      <TextInput 
        placeholder="Número de cuenta"
        value={numeroCuenta}
        onChangeText={setNumeroCuenta}
        style={styles.input}
      />
      <TextInput
        placeholder="Monto"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre del destinatario"
        value={destinatario}
        onChangeText={setDestinatario}
        style={styles.input}
      />
      <Button title="Transferir saldo" onPress={realizarTransferencia} color="#FF5722" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    padding: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default Transferencias;
