import { useState } from "react";
import axios from 'axios'

export default function Form() {
	const [usuario, defUsuario] = useState({ nome: '', prof: '' });
	const Enviar = async (e) => {
		e.preventDefault();
		try {
			// Biblioteca popular do JS, Axios faz requisição HTTP apartir do navegador e node.js
			const resp = await axios.post('https://reqres.in/api/users', usuario);
			console.log(resp);
			alert(`Usuário ${resp.data.nome} criado com sucesso! ID: ${resp.data.id}`);
		} catch (error) {
			console.error(error);
			alert('Erro ao criar usuário.');
		}
	}
	const Alterar = (e) => {
		const { name, value } = e.target;
		// o name é o do elemento: hora o 'nome', hora 'prof' e o valor é passado pelo 'defUsuario'
		// usuario abaxio é do useState
		defUsuario({ ...usuario, [name]: value });
	}
	return (
		<>
			<h1>Formulário</h1>
			<form onSubmit={Enviar}>
				<label><input type="text" onChange={Alterar} value={usuario.nome} placeholder="Nome" name="nome" /></label>
				<label><input type="text" onChange={Alterar} value={usuario.prof} placeholder="Profissão" name="prof" /></label>
				<button type="submit">Enviar</button>
			</form>
		</>
	)
}