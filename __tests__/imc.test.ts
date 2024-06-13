import { imc } from "../src/imc";

describe('Teste do IMC', () => {
    test('Calculo do IMC com peso de 50 e altura de 1.80 deve retornar baixo peso', () => {
        expect(imc.calculoImc(50, 1.80)).toBe('Baixo peso');
    });

    test('Calculo do IMC com peso de 70 e altura de 1.70 deve retornar peso normal', () => {
        expect(imc.calculoImc(70, 1.70)).toBe('Peso normal');
    });

    test('Calculo do IMC com peso de 70 e altura de 1.60 deve retornar sobrepeso', () => {
        expect(imc.calculoImc(70, 1.60)).toBe('Sobrepeso');
    });

    test('Calculo do IMC com peso de 100 e altura de 1.75 deve retornar obesidade grau I', () => {
        expect(imc.calculoImc(100, 1.75)).toBe('Obesidade grau I');
    });

    test('Calculo do IMC com peso de 100 e altura de 1.68 deve retornar obesidade grau II', () => {
        expect(imc.calculoImc(100, 1.68)).toBe('Obesidade grau II');
    });

    test('Calculo do IMC com peso de 150 e altura de 1.65 deve retornar obesidade grau III', () => {
        expect(imc.calculoImc(150, 1.65)).toBe('Obesidade grau III');
    });
});
