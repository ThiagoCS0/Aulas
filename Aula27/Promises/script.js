let prom = new Promise((resolve, reject) => {
	setTimeout(() => {
		let resposta = {};
		if (false) { resposta = { codigo: 404, erro: "Objeto não encontrado" }; reject(resposta); }
		resposta = { 1: { id: 1, nome: "Caio" }, 2: { id: 1, nome: "Leon" }, 3: { id: 1, nome: "Rogerio" } }; resolve(resposta);
	}, 2000)
}).then((dados2) => {
	M(dados2)
	let prom2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			let resposta = {};
			if (false) { resposta = { codigo: 1000, erro: "Erro 1000" }; reject(resposta); }
			resposta = { 1: { id: 1, nome: "Thiago" }, 2: { id: 1, nome: "Carlos" }, 3: { id: 1, nome: "Silva" } }; resolve(resposta);
		}, 2000)
	}).then((dados) => { M(dados); }).catch(erro => { M(erro); })
}).then(() => { M("then 2"); return "then 3"; }).then(param => { M(param); }).catch((erro => { M("Parãmetro de erro..."); }));

function M(m) {
	console.log(m);
}

/*
.then(() => {
	let prom2 = new Promise(
		(resolve, reject) => {
			setTimeout(() => {
				let resposta = {}; if (false) { resposta = { codigo: 1000, erro: 'Erro 1000' }; reject(resposta); }
				resposta = { 1: { id: 1, nome: "Pedro" }, 2: { id: 1, nome: "Fernanda" }, 3: { id: 1, nome: "Rafael" } }; resolve(resposta);
			}, 3000)
		})
}
).then((dados) => { M(dados); }).catch(erro => { M(erro); }
).then(() => { M("Then 2"); return "Then 3"; }
).then(param => { M(param); }
).catch((erro) => { M('Parametro de erro enviado na promise reject.'); })



*/