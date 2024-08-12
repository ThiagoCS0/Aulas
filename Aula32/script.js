const aAbas = {
	1: [
		"React is extremely popular",
		"It makes building complex, interactive UIs a breeze",
		"It's powerful & flexible",
		"It has a very active and versatile ecosystem"
	],
	2: [
		"Components, JSX & Props",
		"State",
		"Hooks (e.g., useEffect())",
		"Dynamic rendering"
	],
	3: [
		"Official web page (react.dv)",
		"Next,js (Fullstack framework)",
		"React Native (build native mobile apps with React)"
	],
	4: [
		"Vanilla JavaScript requires imperative programming",
		"Impertive Programming: You define all the steps needed to achieve a result",
		"React on the othor hand embraces declarative programming",
		"With React, you define the goal and React figures out how to get there"
	]
}

function fAbas(lista) {
	const aba = document.getElementById('dvConteudo');
	aba.innerHTML = '';
	lista.forEach(a => {
		const li = document.createElement('li');
		li.textContent = a;
		aba.appendChild(li);
	});
}

function Ativo(atual) {
	document.querySelectorAll('.abas').forEach(x => x.style.backgroundColor = '#272F33');
	atual.style.backgroundColor = '#3DCDF4';
}

function Click() {
	[1, 2, 3, 4].forEach(x => document.getElementById('item' + x).addEventListener('click', () => { fAbas(aAbas[x]); }));
}

Click();