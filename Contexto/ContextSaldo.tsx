import { createContext } from 'react';
import { Transaccion } from '../Modelos/Transaccion';

export const SaldoContext  = createContext({
  saldo:0,
  transacciones: [] as Transaccion[],
  historial: [] as Transaccion[],
  depositar: (monto: number) => {},
  transferir: (monto: number) => Boolean(false),
})


