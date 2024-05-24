import { imc } from "../src/imc";

describe('Teste do IMC', () => {
    test('Calculo do IMC com peso de 73 e altura de 1.80 deve retornar Peso Ideal', () => {
        expect(imc.calculoImc(73, 1.80)).toBe('Peso ideal');
    });
});

