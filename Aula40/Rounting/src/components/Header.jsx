import { Link } from "react-router-dom"
export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					{/*Link são links que não recarrega a página (assíncrono)*/}
					<li><Link to="/">Inicio</Link></li>
					<li><Link to="/Sobre">Sobre</Link></li>
					<li><Link to="/Contatos">Contato</Link></li>
				</ul>
			</nav>
		</header>
	)
}