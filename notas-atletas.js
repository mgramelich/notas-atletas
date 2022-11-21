// arr dos atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.3]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// vars
let nomeDosAtletas = 0;
let notasDosAtletas = 0;
let mediaDosAtletas = 0;

//
for(let i = 0;i < atletas.length; i++){
  nomeDosAtletas = atletas.map(function(nomes){
    return nomes.nome;
  })
  notasDosAtletas = atletas.map(function(notas){
    let total = notas.notas 
    total.sort(function(a, b){
      return a-b;
    })
    return total;
  })
}

//
for(let i = 0; i < atletas.length; i++){
  switch(i){
    case i:
      console.log(`Atleta: ${nomeDosAtletas[i]}`);
      console.log(`Notas dos Atletas: ${notasDosAtletas[i]}`);
      
    let notasValidas = notasDosAtletas[i].slice(1, notasDosAtletas[i].length - 1);
    let soma = notasValidas.reduce(function(total, atual){
        return (total + atual);
    });
    
    let media = soma / notasValidas.length;
    console.log(`Média valída: ${media}`);
    console.log('-----');
    break;
    
    default:
      console.log("Atleta não cadastrado!");
  }
}
