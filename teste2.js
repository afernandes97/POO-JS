class Estudante{
    constructor(nome, turma){
      this.nome = nome;
      this.turma = turma;
      this.notas = [];
    }
  
    adicionarNota(nota){
      this.notas.push(nota);
    }
    calcularMedia(){
      let soma = this.notas.reduce((estado, nota)=>estado+nota);
  
      return soma/this.notas.length;
    }
  }

  let aluno1 = new Estudante('Fulano', 'WEB & React');
aluno1.adicionarNota(5, 6, 7);

let media = aluno1.calcularMedia();

console.log(aluno1);