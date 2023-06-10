import CpfGenerator from './modules/CpfGenerator';
import validateCpf from "./modules/validateCpf";

import './assets/css/style.css';


class ValidCpfGenerator {
    constructor() {

    }

    showCpf() {
        const newCpf = new CpfGenerator();

        const generatedCpf = document.querySelector('.cpf-generated');
        const newCpfGenerated = newCpf.generateNewCpf();
        generatedCpf.innerHTML = newCpfGenerated;
        return newCpfGenerated;
    };


    cpfCheck() {
        const input = document.querySelector('.input-checker');
        const checker = new validateCpf(input.value);
        
        const result = document.querySelector('.cpf-check-result');

        if(checker.validate()){
            result.classList.remove('invalid-result');
            result.classList.add('valid-result');
            result.innerHTML = 'CPF VALIDO';
        }else{
            result.classList.remove('valid-result');
            result.classList.add('invalid-result');
            result.innerHTML = 'CPF INVALIDO';
        }

    }


    handleClick(){
        const container = document.querySelector('.container');
        container.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-generator')) {
                this.showCpf();
            }
            if (el.classList.contains('checker-btn')) {
                this.cpfCheck();
            }
        })
    }


    createBtn() {
        const generatedCpf = document.querySelector('.cpf-generated');
        const btnGenerator = document.createElement('button');
        generatedCpf.insertAdjacentElement('afterend', btnGenerator);
        btnGenerator.classList.add('btn-generator');
        btnGenerator.innerHTML = 'Generate'

        const checkerInput = document.querySelector('.input-checker');
        const checkerBtn = document.createElement('button');
        checkerInput.insertAdjacentElement('afterend', checkerBtn);
        checkerBtn.classList.add('checker-btn');
        checkerBtn.innerHTML = 'Check';
    }

}

const generatedCpf = new ValidCpfGenerator();
generatedCpf.createBtn();
generatedCpf.handleClick();