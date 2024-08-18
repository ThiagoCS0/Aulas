
import img from '../img/r.png'
import './StyleAbas.css'
function Abas() {
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

	return (
		<body>
			<div id="dvInicio">
				<img src={img} alt="" />
				<div>
					<h1>React.js</h1>
					<p>i.e, using the React library for rendering the UI</p>
				</div>
			</div>
			<div id="dvMenu">
				<div id="dvAbas">
					<a href="#" class="abas" id="item1" onclick="Ativo(this)">Why React?</a>
					<a href="#" class="abas" id="item2" onclick="Ativo(this)">Core Features</a>
					<a href="#" class="abas" id="item3" onclick="Ativo(this)">Related Resources</a>
					<a href="#" class="abas" id="item4" onclick="Ativo(this)">React vs JS</a>
				</div>
				<div id="corpo">
					<nav>
						<ul id="dvConteudo">
						</ul>
					</nav>
				</div>
			</div>
		</body>
	)
}
export default Abas