import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App, { calcularNovoSaldo } from "./app";

describe('Comonente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('Quando eu abro o app do banco, o nome é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('ByteBank')).toBeInTheDocument(); 
        });
        
        it('Quando eu abro o appdo banco, o saldo é exibido', () => {
            render(<App />);
        
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
    
        it('Quando eu abro o app do banco, o botão de realizar transação é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });
    })

    describe('Quando e realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100);
        });

        it('que é um saque, a transação deve ser realizada', () => 
        {
            render(<App />);

            const saldo = screen.getByAltText('R$ 1000');
            const transacao = screen.getByLabelText('Saque');
            const valor = screen.getByTestId('valor');
            const botaoTransacao = screen.getByText('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, { target: {value: 'saque'}});
            fireEvent.change(valor, { target: { value: 10 }});
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');
        })
    })
    
})