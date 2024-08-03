function getCEP(cep) {
	console.log(cep)
	let url = `https://viacep.com.br/ws/${cep}/json/`;
	const xH = new XMLHttpRequest();
	xH.open('GET', url);
	xH.onreadystatechange = () => {
		if (xH.readyState == 4 && xH.status == 200) {
			let data = JSON.parse(xH.responseText);
			document.getElementById('endereco').value = data.logradouro;
			document.getElementById('bairro').value = data.bairro;
			document.getElementById('cidade').value = data.localidade;
			document.getElementById('uf').value = data.uf;
		}
	}
	xH.send();
}