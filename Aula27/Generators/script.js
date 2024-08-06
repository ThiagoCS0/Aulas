function* chat() {
	let opc = yield 'Olá, tudo bem?'
	if (opc == 'Sim') {
		yield 'Otimo'
		opc = yield 'Como eu posso te ajudar? Quer uma piada?'
		if (opc == 'Sim') {
			let piada;
			fetch('./piadas.json').then(respos => respos.json()).then(piadas => {
				piada = piadas[Math.floor(Math.random() * 10)];
				M(piada.piada);
			});
			setTimeout(() => {
				M(piada.respo)
				M('Muito boa a piada! Ri muito mesmo, acredite.')
			}, 4000)
		}
	}
}

let chat1 = chat();

function iniciar() {
	let r = document.getElementById('resposta').value;
	let inter = chat1.next(r);
	M(inter);
}

function M(m) {
	console.log(m);
}
// function* fibonacci() {
// 	let n1 = 1, n2 = 1;
// 	while (true) {
// 		let atual = n2; n2 = n1; n1 += atual;
// 		yield atual
// 	}
// }
// let fib = fibonacci();
// console.log(fib.next());
//----------------------
// Função que pode ser pausada/continuada de uma determinada linha
//o * mostra que essa função é uma Generators
// function* myG() {
// 	let i = 0;
// 	while (true) {
// 		yield i++; // é como o return e depois PARA a função;
// 	}
// }
// function* myG() { yield [1, 2, 3, 4, 5]; }
// function* myG2() { yield* [1, 2, 3, 4, 5]; }//passa o valor por etapas por causa do yield*; avança a cada next()

// let generator = myG();// recebe o objeto com os valores, se tiver, e se foi finalizado.
// let generatorValue = generator.next();//pegar o valor do yield

// let generator2 = myG2();// recebe o objeto com os valores, se tiver, e se foi finalizado.
// let generatorValue2 = generator2.next();//pegar o valor do yield
// let generatorValue3 = generator2.next();//pegar o valor do yield


// console.log(generatorValue);
// console.log(generatorValue2);
// console.log(generatorValue3);