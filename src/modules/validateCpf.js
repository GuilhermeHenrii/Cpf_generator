export default class validateCpf{
    constructor(cpf){
        Object.defineProperty(this,'cleanCpf', {
            enumerable: true,
            get:function(){
                return cpf.replace(/\D+/g, '');
            }
        });
    }
    
    validate(){
        if(typeof this.cleanCpf !== 'string') return false;
        if(!this.cleanCpf) return false;
        if(this.cleanCpf.length !== 11) return false;
        if(this.cleanCpf === 'undefined') return false;
        if(this.sequence()) return false;

        const cutCpf = this.cleanCpf.slice(0, -2);

        const digitOne = validateCpf.createDigit(cutCpf);
        const digitTwo = validateCpf.createDigit(cutCpf + digitOne);

        const newCpf = cutCpf + digitOne + digitTwo;

        return newCpf === this.cleanCpf;
    }

    static createDigit(cleanCpf){//Observando que o método criaDigito não usa o this, ou seja, não usa nada que vem na instancia da classe, defini o mesmo como estático.
        const cpfArr = cleanCpf.split('');
        let decrementer = cpfArr.length + 1;
        const total = cpfArr.reduce((ac, value) => {
            ac += decrementer * Number(value);
            decrementer--;
            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : digit;
    }

    sequence(){
        const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
        return sequence === this.cpfLimpo;
    }

}