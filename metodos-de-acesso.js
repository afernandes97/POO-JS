
/* SEM METODOS DE ACESSO - review aula anterior*/
class Quadrado{
    constructor(lado,altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
        this.setCor = (nova_cor) => { cor = nova_cor };
    }
} 
/*Nesse exemplo, getCor retorna o valor da cor enquanto o setCor altera o valor da cor. No entanto, 
não podemos impedir que alguém por engano crie um atributo cor no objeto e passe um valor para ele, 
como vimos anteriormente.

Podemos usar o conceito de propriedades para nos auxiliar nesse caso. De forma simplificada, 
propriedades são a soma do conceito de atributos e métodos de acesso. Uma propriedade seria, 
portanto, um atributo que tem métodos de acesso.

Como uma propriedade não é uma variável da função construtora, como fizemos acima, ela pertence 
ao objeto (o que impede que ela seja criada por engano) e tem seu acesso restrito por métodos,
que no javascript são chamados de Accessors:
*/



/* Métodos de Acesso
Métodos de Acesso em linguagens como o Java são métodos que permitem a leitura e/ou escrita 
(a critério do programador) de atributos privados. Podemos criar métodos de acesso ao molde do 
que fizemos na aula passada: */

class QuadradoNovo{
    constructor(lado, altura){
        this._cor = 'blue blue';
        this.lado = lado;
        this.altura = altura;
    }

    get cor() { return this._cor; };
    set cor(nova_cor) { this._cor = nova_cor; };
}

const quadradoNovo = new QuadradoNovo(4,4);
console.log(quadradoNovo.cor);
quadradoNovo.cor = 'red red';
console.log(quadradoNovo.cor);

/*A parte chata de usar os Accessors é que eles que devem ter o nome da propriedade e esse nome não 
pode colidir com o nome de um atributo. Isso nos obrigou a renomear a cor como atributo para "_cor", 
o underscore sempre foi usado por programadores das antigas para simbolizar private.

Os Accessors permitiram a leitura e a atribuição de valores na propriedade cor, mas você pode estar 
pensando, mas qual a diferença disso e de não fazer o get/set?

Nesse exemplo, só há uma diferença. A atribuição e a leitura da propriedade passa por métodos em vez 
de ser feita como uma variável. Lembre-se do que já falamos, em POO métodos permitem a aplicação de 
tudo o que já fizemos em lógica de programação. Isso quer dizer que podemos modificar a lógica do 
get e do set para fazer praticamente qualquer coisa.

Vamos explorar isso usando aquele exemplo de algumas aulas atrás:*/

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

/*Temos uma classe quadrado que recebia base e altura por parâmetros e validava se ambos eram valores 
numéricos antes de atribuir nos atributos.

No entanto, para a cor, que não era passada nos parâmetros do construtor, não conseguimos fazer 
nenhuma validação se o valor passado é válido. Porém usando propriedades e accessors podemos fazer isso!
*/

class Quadrado{
    constructor(base, altura){
      if(isNaN(base) || isNaN(altura)) throw 'Base e altura precisam ser números';
      this.base = base;
      this.altura = altura;
      this._cor = undefined;
    }
    get cor() { return this._cor; }
    set cor(cor) { 
      if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
        throw 'O valor da propriedade cor deve ser "red", "green" ou "blue"';
      }
      this._cor = cor; 
    }
  }
  
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Quadrado { base: 3, altura: 4, _cor: undefined }
  console.log(quadrado.cor);
  //blue
  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //red
  quadrado.cor = 'white';
  //O valor da propriedade cor deve ser "red", "green" ou "blue"

/*
Aqui limitamos as atribuições à propriedade cor para os valores "green", "blue" ou "red" e usamos 
!== com dois iguais para garantir que passados como strings.

Conseguimos o que queríamos, mas pouca coisa no JavaScript é perfeita. Linguagens que adicionaram 
suporte a POO, mas que não tem sua arquitetura projetada para POO desde o princípio tem dificuldades 
com encapsulamento, isso acontece no JavaScript e no Python.

No exemplo acima, ainda podemos burlar o accessor usando quadrado._cor = 'white'. Sendo assim, a 
sintaxe de classe do javascript não tem uma forma segura de garantir o encapsulamento.

Para ter uma garantia maior teremos que usar uma factory function combinada com get e set.
*/


function createQuadrado(base, altura){
    if(isNaN(base) || isNaN(altura)) throw 'Base e altura precisam ser números';
    let _cor = undefined;
    return {
      base,
      altura,
      get cor() {return _cor; },
      set cor(cor) {
        if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
          throw 'O valor da propriedade cor deve ser "red", "green" ou "blue"';
        }
        _cor = cor; 
      }    
    };
  }
  
  const quadrado = createQuadrado(3,4);
  console.log(quadrado);
  //{ base: 3, altura: 4, cor: [Getter/Setter] }
  console.log(quadrado.cor);
  //blue
  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //red
  quadrado.cor = 'white';
  //O valor da propriedade cor deve ser "red", "green" ou "blue"

/*
Em suma, a orientação a objetos no JavaScript não é perfeita. Se você estiver vindo de uma linguagem 
nativamente orientada a objetos como C++, C# ou Java isso tudo pode parecer muito estranho.

Nossa recomendação é não se apoiar demais nesses conceitos de encapsulamento. Geralmente usamos esses 
conceitos apoiados em convenções dentro do time de programadores para garantir um pouco mais de 
adequação aos conceitos.
*/