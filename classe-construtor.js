/*
Classe e Construtor
Classes são a forma de definir as entidades no nosso sistema. Elas 
são estruturas capazes de dar origem a infinitos objetos de mesmo tipo.

Para criar uma classe usamos o comando class no JavaScript.
*/
class nomeDaClasse {

}
/*
O aspecto mais relevante de uma classe é o método construtor, 
onde indicaremos quais são os atributos que a classe possui e quais 
são os valores necessários que precisam ser definidos no momento 
da criação do objeto.

A classe é semelhante a uma "planta baixa" que determina a estrutura 
e os comportamentos dos objetos criados por ela. Uma classe Pessoa 
pode indicar que todo objeto tenha um nome, mas não pode indicar 
qual é esse nome, pois ele será diferente para cada objeto Pessoa 
criado por ela.

Para criar a classe Pessoa, com nome e idade, as informações 
necessárias devem ser passadas por parâmetros no construtor e 
atribuída em atributos precedidos por this. :
*/

//criando a classe pessoa
class Pessoa {
    constructor(nome,idade,telefone){
    this.nome = [nome];
    this.idade = [idade];
    this.telefone = [telefone];
    }
}
//Para criar um objeto do tipo Pessoa faremos:
//criando um objeto com referencia a classe Pessoa
const pessoa1 = new Pessoa('André',23,11953335781);
console.log(pessoa1)
console.log('nome: '+pessoa1.nome+', idade: '+pessoa1.idade+', telefone: '+pessoa1.telefone);

//Sempre que precisar de uma nova Pessoa, basta criar outro objeto:
const pessoa2 = new Pessoa('Vivi', 17, 11954545454);
console.log(pessoa2);