import axios from "axios"
export default function GetUsuario() {
	const getUsuario = () => {
		axios.get('https://reqres.in/api/users/1').then(resp => {
			console.log('Dados do usuário:', resp.data); alert('Usuário:\n' + resp.data.data.first_name)
		}).catch(error => {
			console.log('Erro: ', error); alert('Erro ao retornar dados do usuário')
		})
	}
	return (
		<>
			<div>
				<button onClick={getUsuario}>Recuperar dados</button>
			</div>
		</>
	)
}