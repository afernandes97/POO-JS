class Agenda{
	constructor(){
		this.nomes = [];
		this.telefones = [];
		this.emails = [];
	}
	
	adicionarContato(nome,tel,email){
		this.nomes.push(nome);
		this.telefones.push(tel);
		this.emails.push(email);
	}
}	

const agenda = new Agenda();
console.log(agenda);
agenda.adicionarContato('maria',12345678,'its@its.com');
console.log(agenda);
agenda.adicionarContato('carlos',1222248678,'its@aa3.com');
console.log(agenda);

console.log(agenda.nomes);
console.log(agenda.telefones);
console.log(agenda.emails);




/*


*/


class Conta{
	constructor(cpf, senha, saldo){
		let numero_cpf = cpf;
		let senha_user = senha;
		let saldo_user = saldo;
		let logado = false;
		

		this.logar = (novo_cpf, senha_tentada) => {
			if(novo_cpf === numero_cpf && senha_tentada === senha_user){
				logado = true;
				console.log('bem vindo de volta');
			}
		}
		this.inserirSaldo = (novo_saldo) => {
			if(logado === true){
				saldo_user = novo_saldo;
				console.log('voce adicionou' + novo_saldo + ' a sua conta, seu saldo atualizado é de:' +
				saldo_user);
			}
		}

		this.sacarSaldo = (valor_do_saque, valor_atualizado_saque) => {
			if(logado === true){
				valor_atualizado_saque = saldo_user - valor_do_saque;
				saldo_user = valor_atualizado_saque;
				console.log('saque efetuado, seu novo saldo é de:' + saldo_user);
			}
		}
	}

	
}

/* TEST HERANCA */

class Veiculo{
	constructor(marca, modelo, linha, ano, km_rodado){
		this.marca = marca;
		this.modelo = modelo;
		this.linha = linha;
		this.ano = ano;
		this.km_rodado = km_rodado;
	}
}

class Moto extends Veiculo{
	constructor(marca,modelo,linha,ano,km_rodado,cor, cilindradas){
		super(marca,modelo,linha,ano,km_rodado);
		this.cor = cor;
		this.cilindradas = cilindradas;
	}
}

class Carro extends Veiculo{
	constructor(marca,modelo,linha,ano,km_rodado,cor,qnt_portas,air_bag){
		super(marca,modelo,linha,ano,km_rodado);
		this.cor = cor;
		this.qnt_portas = qnt_portas;
		this.air_bag = air_bag;

		air_bag = true;
	}
}