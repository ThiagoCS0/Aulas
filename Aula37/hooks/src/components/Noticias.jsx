import { useState, useEffect } from "react";
function Noticias() {
	const [noticia, defNoticias] = useState(null)
	const [estaCarregando, Carregando] = useState(true)
	useEffect(() => {
		const buscarNoticias = async () => {
			Carregando(true)
			try {
				const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
				const noticiaJson = await resposta.json()
				defNoticias(noticiaJson.slice(0, 10))
			} catch (error) {
				console.error('Erro:', error)
			}
			Carregando(false)
		}
		buscarNoticias()
		const espera = setInterval(buscarNoticias, 30000)
		return () => { clearInterval(espera) }
	}, [])
	return (
		<div>
			{
				estaCarregando ?
					// (user.forEach(us => {<div><h1>Nome: {us.name}</h1><h1>Email: {us.email}</h1></div>})) :
					(<p>Carregando perfil de usuário...</p>) :
					// (<div><h1>{noticia.title}</h1><p>{noticia.body}</p></div>) :
					(<ul>{noticia.map((artigo) => (<li key={artigo.id}> <p>{artigo.title}</p> </li>))}</ul>)
			}
		</div>
	)
}

export default Noticias