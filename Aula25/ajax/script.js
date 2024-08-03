function requisitar(url) {
	document.getElementById('content').innerHTML = '';

	if (!document.getElementById('loading')) {
		const imgLoad = document.createElement('img');
		imgLoad.id = 'loading';
		imgLoad.src = './src/loading.gif';
		imgLoad.className = 'rounded mx-auto d-block';
		document.getElementById('content').appendChild(imgLoad);
	}
	let ajax = new XMLHttpRequest();
	ajax.open('GET', url)
	console.log(ajax.readyState);
	ajax.onreadystatechange = () => {
		if (ajax.readyState == 4 && ajax.status == 200) { document.getElementById('content').innerHTML = ajax.responseText; }
		if (ajax.readyState == 4 && ajax.status == 404) { document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado.'; }
	}
	setTimeout(() => { ajax.send() }, 1000);
}

function M(s) {
	console.log(".:" + s);
}