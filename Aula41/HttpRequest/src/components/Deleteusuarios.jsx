import axios from "axios";
function JX(tt, dd) {
	console.log(tt + "\n" + JSON.stringify(dd));
	// alert(JSON.stringify(dd));
}
export default function DelUsuarios() {
	const deletarUsuario = async () => {
		axios.delete('https://reqres.in/api/users/2').then(res => { JX('DEL', `Usuário deletado. Status ${res.status}`); }).catch(erro => { JX('ERRO', res); });
	}
	return (
		<>
			<button onClick={deletarUsuario}>Deletar</button>
		</>
	)
}