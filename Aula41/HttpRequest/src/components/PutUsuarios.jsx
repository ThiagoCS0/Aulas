import axios from "axios"
import { useState } from "react"

function JX(tt, dd) {
	console.log(tt + "\n" + JSON.stringify(dd));
	// alert(JSON.stringify(dd));
}
export default function PutUsuarios() {
	const [nome, defNome] = useState('')
	const mudarNome = (e) => { defNome(e.target.value); }
	// const PutUsuario = async (e) => {
	// 	try {
	// 		const resp = await axios.get('https://reqres.in/api/users/2'); JX('GET',resp.data.data.first_name);
	// 		const resp2 = await axios.put('https://reqres.in/api/users/2', { name: nome }); JX('PUT',resp2.data.name);
	// 	} catch (error) { console.error(error); }
	// }
	const atualizar = () => {
		axios.put('https://reqres.in/api/users/2', { name: nome })
			.then(resp => { JX('OK', resp) })
			.catch(error => { JX('ERRO', error); })
	}
	return (
		<>
			<form>
				<input type="text" value={nome} onChange={mudarNome} name="nome" />
			</form>
			<button onClick={atualizar}>Alterar</button>
			{/* <button onClick={PutUsuario}>Alterar</button> */}
		</>
	)
}