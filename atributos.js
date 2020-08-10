/*Atributos
Restringindo Tipo de Atributos
Vimos na aula anterior que para criar um atributo basta usar o prefixo 
this e dar um nome para o atributo. Isso se dá porque a tipagem 
dinâmica do javascript também se dá nos atributos. O quer dizer que o 
tipo do atributo será definido pelo tipo do valor colocado nele.

Quando fazemos estruturas de dados, algumas vezes esse é o 
comportamento que desejamos, no entanto em outras esse comportamento 
é inadequado. Existem estruturas onde precisamos restringir os 
tipos dos atributos para que a estrutura funcione corretamente.
*/

//Por exemplo:

class Quadrado{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}
//Quando formos adicionar um método para calcular área nessa classe, precisamos garantir que 
//os valores de base e altura sejam números ou então o cálculo será impossível, lembre-se que nada impede que sejam passadas strings por exemplo! Veja:

const quadrado = new Quadrado(3, 4);
console.log(quadrado);

const quadrado2 = new Quadrado('teste', 'teste2');
console.log(quadrado2);
//Ambos funcionam! Para isso, é necessário fazer uma lógica condicional, podemos usar 
//isNaN que é uma função que verifica se o valor não é número:

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
    }
}
/*
Assim, nossa classe passa a produzir um erro se mal utilizada.

Atributos Opcionais
Podemos ter atributos opcionais em uma classe também, não é necessário, mas aconselhável 
passar todos os valores necessários no construtor.

Por exemplo, imagine que o quadrado possa ter uma cor, que é opcional.

Não colocaremos a cor nos parâmetros do construtor, mas criaremos um atributo para ela com 
o valor "undefined" que significa não definido. A cor poderá ser alterada depois de fora da 
classe.
*/
class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: undefined }
quadrado.cor = 'azul';
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: 'azul' }
/*Observe que diferentemente da base e altura, que podemos validar antes, no caso da cor o 
usuário pode passar o valor que ele quiser e não temos como restringir porque não estamos 
no contexto de método como acontece no construtor.

Mais para frente veremos como fazer essa restrição usando um conceito da POO chamado
encapsulamento e métodos de acesso (que no JavaScript chamam Accessors). Mas antes, 
vamos ver como implementar métodos em classes.*/