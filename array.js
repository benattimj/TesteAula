var valores = [8, 1, 7, 2, 9];

console.log(valores[3]);


for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição: " + pos + " Valor " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Fiat"

console.log(carros);

var motos = new Array("Bmw ", "Yamaha");
console.log("Tudo: " + motos + "  A escolhida: " + motos[1]);


var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
    soma += valores[pos];

}

var media = soma / valores.length;

console.log(media);

// splice, remover e inserir novo valor na array
var nomes = ["MAria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1, 2, "Luiz", "Ronaldo");
console.log(nomes);


//slice extrai o valor do elemento
var pessoa = ["Eduardo", "Joana", "Wallace", "Roasas"];
var pessoas1 = nomes.slice(1, 3);
console.log(pessoas1);

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares(value) {
    if (value % 2 == 0)
        return value;
}

var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

var r1 = numeros.filter((valor) => {
    return valor > 5;
});

console.log(r1);


// filter 


var r2 = numeros.filter(valor => valor <= 5);
console.log(r2);

var funcionarios = [
    { nome: "Luiz", idade: 62 },
    { nome: "davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 },
]


var pessoasListagem = funcionarios.filter(
    function (valor) {
        return valor.nome.length < 5
    })

console.log(pessoasListagem);


// Map - Pega os elementos e interage neles




