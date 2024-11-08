import React, {  useState, ReactNode } from 'react';
import { Transaccion } from '../Modelos/Transaccion';
import { SaldoContext } from './ContextSaldo';


interface Nodo{
  children: ReactNode
}

export default function ProviderSaldo({children}:Nodo) {


  const [saldo, setSaldo] = useState(10000);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const [historial, setHistorial] = useState<Transaccion[]>([]);

  const depositar = () => {
    setSaldo(saldo + 500);
    agregarTransaccion("Depósito", 500);
  };

  const transferir = (monto: number): boolean => {
    if (monto > saldo) return false;
    setSaldo(saldo - monto);
    agregarTransaccion("Retiro", monto);
    return true;
  };

  const agregarTransaccion = (tipo: string, monto: number) => {
    const nuevaTransaccion: Transaccion = {
      id: Date.now(),
      tipo,
      monto,
    };
    setTransacciones([nuevaTransaccion, ...transacciones].slice(0, 5));
    setHistorial([nuevaTransaccion, ...historial].slice());
  };

  return (
    <SaldoContext.Provider value={{ saldo, transacciones, historial, depositar, transferir }}>
      {children}
    </SaldoContext.Provider>
  );
};
