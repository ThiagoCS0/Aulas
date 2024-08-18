import { useState } from 'react'
import '../components/Navegacao-abas.module.css'
const conteudos = [
	[
		"Conteúdo 0",
		"Conteúdo 1",
		"Conteúdo 2",
	],
	[
		"Conteúdo 3",
		"Conteúdo 4",
		"Conteúdo 5",
	],
	[
		"Conteúdo 6",
		"Conteúdo 7",
		"Conteúdo 8",
	]
]
function NavegacaoAbas() {
	const [estadoAtual, setEstado] = useState(0);
	return (
		<>
			<div>
				<header>
					<img src="" alt="" />
					<h1>Aula 36 - React.js</h1>
					<p>Exercício para treinar o useState</p>
				</header>
			</div>
			<div id='abas'>
				<nav>
					<button onClick={() => setEstado(0)}>Click 0</button>
					<button onClick={() => setEstado(1)}>Click 1</button>
					<button onClick={() => setEstado(2)}>Click 2</button>
				</nav>
			</div>
			<div id="conteudo">
				<ul>
					{conteudos[estadoAtual].map((item) => <li key={item}>{item}</li>)}
				</ul>
			</div>
		</>
	)
}

export default NavegacaoAbas