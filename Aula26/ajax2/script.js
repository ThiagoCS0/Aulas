function getFilmes() {
	const xH = new XMLHttpRequest();
	xH.open('GET', 'xml/filmes.xml');
	xH.onreadystatechange = () => {
		if (xH.readyState == 4 && xH.status == 200) {
			let XMLFilme = xH.responseText;
			const parser = new DOMParser();
			const DOMFilmes = parser.parseFromString(XMLFilme, 'text/xml');
			JSONFilmes = xmlToJson(DOMFilmes);

			for (let i in JSONFilmes['filmes']['filme']) {
				let item = JSONFilmes['filmes']['filme'][i];
				let divR = document.createElement('div'); divR.className = 'row';
				let divC = document.createElement('div'); divC.className = 'col';
				let p1 = document.createElement('p'); p1.innerHTML = '<strong>Titulo: </strong>' + item['titulo']['#text'] + '<br>',
					p2 = document.createElement('p'); p1.innerHTML += '<strong>Genero: </strong>' + item['elenco']['#text'] + '<br>',
						p3 = document.createElement('p'); p1.innerHTML += '<strong>Resumo: </strong>' + item['resumo']['#text'];
				divR.appendChild(divC);
				divC.appendChild(p1);
				divC.appendChild(p2);
				divC.appendChild(p3);
				document.getElementById('list').appendChild(divR);
				let hr = document.createElement('hr');
				document.getElementById('list').appendChild(hr);
			}
		}
	};
	xH.send();
}

function M(msg) {
	console.log(msg);
}

function xmlToJson(xml) {
	var obj = {}, i, j, attribute, item, nodeName, old;
	if (xml.nodeType == 1) {
		if (xml.attributes.length > 0) {
			obj['@attributes'] = {};
			for (j = 0; j < xml.attributes.length; j = j + 1) {
				attribute = xml.attributes.item(j);
				obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) {
		obj = xml.nodeValue.trim();
	}
	if (xml.hasChildNodes()) {
		for (i = 0; i < xml.childNodes.length; i = i + 1) {
			item = xml.childNodes.item(i);
			nodeName = item.nodeName;
			if ((obj[nodeName]) == undefined) {
				obj[nodeName] = xmlToJson(item);
			} else {
				if ((obj[nodeName].push) == undefined) {
					old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
}