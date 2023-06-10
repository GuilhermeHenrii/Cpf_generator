import validateCpf from "./validateCpf";

export default class CpfGenerator {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min)) + min);
    }


    cpfFormatted(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }


    generateNewCpf() {
        const cpfWithoutDigit = this.rand();
        const oneDigit = validateCpf.createDigit(cpfWithoutDigit);
        const twoDigit = validateCpf.createDigit(cpfWithoutDigit + oneDigit);

        const newCpf = cpfWithoutDigit + oneDigit + twoDigit;

        return this.cpfFormatted(newCpf);
    }
}