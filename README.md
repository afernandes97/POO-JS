# POO-JS

Segundo módulo do Curso Web & React da Lets Code Academy https://letscode-academy.com/

# Classe e Construtor
Classes são a forma de definir as entidades no nosso sistema. Elas são estruturas capazes de dar origem a infinitos objetos de mesmo tipo.

* O aspecto mais relevante de uma classe é o método construtor, onde indicaremos quais são os atributos que a classe possui e quais são os valores necessários que precisam ser definidos no momento da criação do objeto.

A classe é semelhante a uma "planta baixa" que determina a estrutura e os comportamentos dos objetos criados por ela. Uma classe Pessoa pode indicar que todo objeto tenha um nome, mas não pode indicar qual é esse nome, pois ele será diferente para cada objeto Pessoa criado por ela.

Para criar a classe Pessoa, com nome e idade, as informações necessárias devem ser passadas por parâmetros no construtor e atribuída em atributos precedidos por this.

# Atributos
Restringindo Tipo de Atributos Vimos na aula anterior que para criar um atributo basta usar o prefixo this e dar um nome para o atributo. Isso se dá porque a tipagem 
dinâmica do javascript também se dá nos atributos. O quer dizer que o tipo do atributo será definido pelo tipo do valor colocado nele.

Quando fazemos estruturas de dados, algumas vezes esse é o comportamento que desejamos, no entanto em outras esse comportamento é inadequado. Existem estruturas onde precisamos restringir os tipos dos atributos para que a estrutura funcione corretamente.

* Atributos Opcionais - Podemos ter atributos opcionais em uma classe também, não é necessário, mas aconselhável passar todos os valores necessários no construtor.



## Métodos
Métodos dão aos nossos objetos o poder de executar códigos, o que chamamos de comportamento há algumas aulas. Tudo o que você aprendeu em lógica de programação até o momento pode ser utilizado dentro dos métodos (e somente dentro dos métodos) quando estamos no contexto orientado a objetos.

Métodos são computacionalmente idênticos às funções. Chamamos de métodos e não funções por dois motivos:

* Por estar no contexto POO e no interior de uma classe. Por ele poder manipular o estado interno de um objeto. Leia "estado" acima como o conjunto de valores dos atributos.

Para declarar um método em uma classe basta fazer, após o construtor, uma função sem usar a palavra function usamos apenas o nome. Também não podemos usar arrow functions nesse contexto por conta do mesmo problema com this. que tivemos nos objetos.

/*Métodos podem ler ou alterar o estado interno do objeto, assim como podem fazer qualquer computação com os valores dos atributos e até mesmo chamar outros métodos do mesmo objeto.*/

Alguns métodos podem até criar outros objetos ou funções, dependendo da necessidade. Alguns padrões como Factory dependem dessa capacidade. Imagine por exemplo uma classe de configuração onde você coloca vários dados e no final ela te devolve uma função que abre uma conexão com um banco de dados usando os dados fornecidos.

No entanto, se métodos estiverem fazendo computações independentes de qualquer informação pertencente ao objeto, existe grandes chances de que eles estejam no lugar errado. Nesse caso, eles poderíam estar em outro objeto ou no próprio script como uma função.


## Encapsulamento
Encapsulamento é o conceito de negar o acesso aos atributos de uma classe diretamente, seja para leitura ou escrita. A maioria das linguagens orientadas a objetos utilizam algum comando como private por exemplo para restringir esse acesso.

O JavaScript não é uma linguagem orientada a objetos de nascença, o suporte a conceitos mais avançados em POO só foi adicionado recentemente. JavaScript até hoje ainda trata classes como funções, mesmo tendo a palavra class e uma sintaxe especial para montar classes.

A parte boa é que podemos utilizar o conhecimento em funções para realizar coisas nas classes que suprem a ausência de alguns conceitos. Por exemplo, variáveis dentro de funções não são acessíveis de fora da função, então poderíamos fazer encapsulamento usando elas.

/*Linguagens dinâmicas como JavaScript ou Python, permitem a inserção de novos atributos ou métodos em objetos pré-existentes. Isso torna erros de digitação particularmente 
problemáticos, porque em vez de trocar o valor de um atributo existente, criamos um novo com o nome incorreto.
Quanto a sintaxe de classe, estima-se que terá em um futuro próximo uma sintaxe usando # na frente de variáveis privadas. Hoje isso é suportado em alguns navegadores maiores, mas ainda não está oficializado.*/

/*Quando o encapsulamento complica mais do que ajuda, podemos recorrer a uma outra técnica, que é padronizar o acesso aos valores dos atributos de forma que voltamos a ter o controle sobre atribuições e leituras, como fazíamos com os valores vindos dos parâmetros do construtor.Para isso usaremos um conceito chamado em algumas linguagens de métodos de acesso, ou propriedades, ou como chamamos no JavaSript "Acccessors".*/

SEM METODOS DE ACESSO - review aula anterior
```
class Quadrado{
    constructor(lado,altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
        this.setCor = (nova_cor) => { cor = nova_cor };
    }
} 
```
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



## Métodos de Acesso
Métodos de Acesso em linguagens como o Java são métodos que permitem a leitura e/ou escrita (a critério do programador) de atributos privados. Podemos criar métodos de acesso ao molde do que fizemos na aula passada: */

```
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
```
/*
A parte chata de usar os Accessors é que eles que devem ter o nome da propriedade e esse nome não pode colidir com o nome de um atributo. Isso nos obrigou a renomear a cor como atributo para "_cor", o underscore sempre foi usado por programadores das antigas para simbolizar private.

Os Accessors permitiram a leitura e a atribuição de valores na propriedade cor, mas você pode estar pensando, mas qual a diferença disso e de não fazer o get/set?

Nesse exemplo, só há uma diferença. A atribuição e a leitura da propriedade passa por métodos em vez de ser feita como uma variável. Lembre-se do que já falamos, em POO métodos permitem a aplicação de tudo o que já fizemos em lógica de programação. Isso quer dizer que podemos modificar a lógica do get e do set para fazer praticamente qualquer coisa.

Vamos explorar isso usando aquele exemplo de algumas aulas atrás:*/
```
class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}
```
Temos uma classe quadrado que recebia base e altura por parâmetros e validava se ambos eram valores numéricos antes de atribuir nos atributos.

No entanto, para a cor, que não era passada nos parâmetros do construtor, não conseguimos fazer nenhuma validação se o valor passado é válido. Porém usando propriedades e accessors podemos fazer isso!

```
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
```
Aqui limitamos as atribuições à propriedade cor para os valores "green", "blue" ou "red" e usamos !== com dois iguais para garantir que passados como strings.
Conseguimos o que queríamos, mas pouca coisa no JavaScript é perfeita.

* Linguagens que adicionaram suporte a POO, mas que não tem sua arquitetura projetada para POO desde o princípio tem dificuldades com encapsulamento, isso acontece no JavaScript e no Python. No exemplo acima, ainda podemos burlar o accessor usando quadrado._cor = 'white'. Sendo assim, a sintaxe de classe do javascript não tem uma forma segura de garantir o encapsulamento. Para ter uma garantia maior teremos que usar uma factory function combinada com get e set.


```
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
```
/*Em suma, a orientação a objetos no JavaScript não é perfeita. Se você estiver vindo de uma linguagem nativamente orientada a objetos como C++, C# ou Java isso tudo pode parecer muito estranho.Nossa recomendação é não se apoiar demais nesses conceitos de encapsulamento. Geralmente usamos esses conceitos apoiados em convenções dentro do time de programadores para garantir um pouco mais de adequação aos conceitos.*/


## Herança e Polimorfismo
### Herança

JavaScript tem o conceito de herança como a maioria das linguagens de programação orientadas a objetos. Que é criar uma nova classe que herda os atributoes e métodos de uma classe pai. A nova classe, por sua vez, é chamada de classe filha.

A sintaxe para fazermos herança em JavaScript é a mesma utilizada em Java, ou seja, a palavra extends denota a herança e a palavra super refere-se a super classe que foi herdada.

Podemos, por meio do super. acessar qualquer atributo ou método da super classe.

## Polimorfismo

Polimorfismo é uma conceito vindo do grego poli morfos, que significa "múltiplas formas".

Ele se aplica na orientação a objetos no uso de Herança e na implementação de interfaces (que não é possível em JavaScript).

* Quando fazemos herança, nossa classe passa a ter vários tipos, assim como os objetos criados por ela.

* Os tipos são: O tipo da própria classe, denotado pelo mesmo nome da classe e o tipo de qualquer super classe que ela herde. 

Essa é uma boa regra para validar herança inclusive, quando você não puder dizer que a sub classe É a super classe, ela não será candidata para herança.

Em linguagens dinâmicas, o polimorfismo de classes e objetos não é tão imprescindível e necessário como acontece em linguagens estáticas. No entanto, você sempre poderá verificar se um objeto tem um determinado tipo usando instanceof.

Essa técnica é muito usada quando um objeto de determinado tipo deve ser passado por parâmetro para uma função ou método por exemplo.

Usando instanceof podemos validar se o que nos foi passado é de fato um objeto da classe que esperamos. Em linguagens dinâmicas, quando criamos bibliotecas para outras pessoas usarem, esse tipo de validação é praticamente obrigatório para não termos problemas com tipos indevidos.


