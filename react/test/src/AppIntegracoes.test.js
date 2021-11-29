import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import api from './api';

jest.mock('./api')

describe('Requisições para API', () => {
    it('Exibir lista de transações através de API', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "valor": "20",
                "transacao": "deposito",
                "data": "26/09/2020",
                "id": 2
            },
        ]);
        render(<App />);

        expect(await screen.findByText('saque')).teBeInTheDocument();

        expect(screen.getByTestId('transacoes').children.lenght).toBe(2);
    })
})