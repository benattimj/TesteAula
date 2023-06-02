// Resumindo ao inves de usar o for usar o map

var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
});

console.log(nums);

var funcionarios = [
    { nome: "Luiz", idade: 62 },
    { nome: "davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 },
]

nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes);


// reduce = reduz um array de valores a um unico valor

var estoque = [
    { nome: "Camiseta", preco: 29.90, quantidade: 10 },
    { nome: "Calça", preco: 79.90, quantidade: 5 },
    { nome: "Tênis", preco: 149.90, quantidade: 3 },
    // ... outros produtos ...
 ];
 
 var valorTotalEstoque = estoque.reduce(function(acumulador, produto) {
    var valorProduto = produto.preco * produto.quantidade;
    return acumulador + valorProduto;
 }, 0);
 
 console.log("O valor total do estoque é: R$", valorTotalEstoque.toFixed(2));