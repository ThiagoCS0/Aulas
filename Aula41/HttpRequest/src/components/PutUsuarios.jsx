import axios from "axios"
import { useState } from "react"
export default function PutUsuarios() {
	const [nome, defNome] = useState('')
	const mudarNome = (e) => { defNome(e.target.value); }
	const PutUsuario = async (e) => {
		try {
			const resp = await axios.put('https://reqres.in/api/users/2', { name: nome }); console.log(resp);
		} catch (error) { console.error(error); }
	}
	return (
		<>
			<input type="text" value={nome} onChange={mudarNome} />
			<button onClick={PutUsuario}>Alterar</button>
		</>
	)
}