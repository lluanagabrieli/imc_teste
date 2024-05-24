export class imc {
   static calculoImc(peso: number, altura: number): string {
        const total =  peso / (altura**2)
        if(total >= 18.6 && total <= 24.9) {
            return 'Peso ideal';
        } else {
            return 'Acima do peso'
        }
    }
}