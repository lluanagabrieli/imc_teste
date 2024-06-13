export class imc {
   static calculoImc(peso: number, altura: number): string {
        const total =  peso / (altura**2)
        if(total < 18) {
            return 'Baixo peso';
        } 
        else if(total >= 18.5 && total <= 24.9) {
            return 'Peso normal'
        }
        else if(total >= 25 && total <= 29.9) {
            return 'Sobrepeso'
        }
        else if(total >= 30 && total <= 34.9) {
            return 'Obesidade grau I'
        }
        else if(total >= 35 && total <= 39.9) {
            return 'Obesidade grau II'
        }
        else {
            return 'Obesidade grau III'
        }
    }
}