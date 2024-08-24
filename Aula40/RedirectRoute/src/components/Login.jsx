import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"
export default function Login() {
	const [nome, defNome] = useState('')
	const Definir = (e) => { defNome(e.target.value); }
	const Enviar = (e) => {
		e.preventDefault();
		alert('Olá ' + nome);
	}
	return (
		<div>
			<h1>Faça login para proceguir</h1>
			<form onSubmit={Enviar}>
				<div>
					<label>Login<br /><input type="text" value={nome} onChange={Definir}
						placeholder="Nome ou Email" /></label>
					<label>Senha<br /><input type="password" placeholder="Senha" /></label>
				</div>
				<button type="submit">Entrar</button>
			</form>
		</div>
	)
}