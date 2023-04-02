function bubbleSort() {
    const numberss = [];
    while (true) {
        const numbers = prompt("Digite um número:");
        if (numbers === null) return;
        if (numbers === "") break;
        if (!isNaN(numbers)) numberss.push(parseInt(numbers));
    }
    if (numberss.length > 0) {
        const originalArray = [...numberss];
        for (let i = numberss.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (numberss[j] > numberss[j + 1]) {
                    [numberss[j], numberss[j + 1]] = [numberss[j + 1], numberss[j]];
                }
            }
        }
        alert(`Array original: ${originalArray}\nordenado: ${numberss}`);
    } else {
        alert("Nenhum numero foi digitado.");
    }
}



function calculateFatorial() {
    let numbers = parseInt(prompt("Digite um número para calcular fatorial:"));
    if (isNaN(numbers)) return alert("Encerrado!");
    let resultado = 1;
    for (let i = 2; i <= numbers; i++) {
        resultado *= i;
    }
    alert(`O fatorial de ${numbers} é ${resultado}.`);
}


function calculateFibonacci() {
    let numbers;
    do {
        numbers = parseInt(prompt("Digite um número para gerar a sequncia de Fibonacci:"));
        if (numbers < 0) {
            alert("insira um número positivo válido.");
        }
    } while (numbers < 0);

    let fibonacci = [0, 1];
    let i = 2;

    while (fibonacci[i - 1] + fibonacci[i - 2] <= numbers) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    if (isNaN(numbers)) {
        alert("Programa encerrado")
    } else (
        alert(`A sequencia de Fibonacci até ${numbers} é: ${fibonacci.join(", ")}`)
    )
}


function isPrime() {
    let numbers = parseInt(prompt("Verificar se o numero é primo:"));
    if (isNaN(numbers)) {
        alert("Programa encerrado.");
        return;
    }
    if (numbers < 2) {
        alert("O número precisa ser maior ou igual a 2.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            alert(`${numbers} não é primo.`);
            return;
        }
    }
    alert(`${numbers} é primo.`);
}


function reverseString() {
    let str = prompt("Digite uma string para inverter:");
    if (!isNaN(str)) {
        alert("Digite uma string válida.");
        return;
    }
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    alert(`A string invertida é: ${reversedStr}`);
}


function numbersberWords() {
    const contarPalavras = (str) => {
        const palavras = str.trim().split(/\s+/)
        return palavras.length
    }

    const texto = prompt("Digite uma sentença: ")
    const numberseroDePalavras = contarPalavras(texto)
    alert(`O número de palavras foi de: ${numberseroDePalavras}`)
}

function calculateAverage() {
    let sum = 0;
    let count = 0;
    let response;

    do {
        let numbers = parseFloat(prompt("Digite um número:"));
        if (!isNaN(numbers)) {
            sum += numbers;
            count++;
        } else {
            alert("Digite um número válido.");
        }
        response = prompt("Deseja continuar? [S/N]").toUpperCase();
    } while (response === "S");

    if (count > 0) {
        const average = sum / count;
        alert(`A média dos números digitados é ${average.toFixed(2)}.`);
    } else {
        alert("Nenhum número foi digitado.");
    }
}

function biggerWord() {
    const entrada = prompt("Digite uma frase:")
    const palavras = entrada.split(" ")
    let palavraMaisLonga = ""

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > palavraMaisLonga.length) {
            palavraMaisLonga = palavras[i]
        }
    }
    alert(`A palavra mais longa é: ${palavraMaisLonga}`)
}

function sumHeadquarters() {
    const matriz = prompt("Digite uma matriz de números separados por vírgulas:")
    const numberseros = matriz.split(",").map(numbersber)
    let soma = 0

    for (let i = 0; i < numberseros.length; i++) {
        soma += numberseros[i]
    }

    alert(`A soma dos números é: ${soma}`)
}

function recursiveFactorial() {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1)
        }
    }

    const numbersero = parseInt(prompt("Digite um número para calcular o fatorial:"))

    const resultado = factorial(numbersero)
    alert(`O fatorial de ${numbersero} é: ${resultado}`)
}