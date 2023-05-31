var valores = [8, 1, 7, 2, 9];


console.log(valores[3]);


for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição: " + pos + " Valor " + valores[pos]);
}


var carros = [];
carros[0] = "Volvo";
carros[1] = "Fiat"

console.log(carros);

var motos = new Array("Bmw", "Yamaha");
console.log("Tudo: " + motos + "A escolhida: " + motos[1]);


var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
 soma += valores[pos];

}


var media = soma/valores.length;

console.log(media);