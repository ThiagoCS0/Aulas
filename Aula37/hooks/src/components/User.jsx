import { useState, useEffect } from "react";
function UserProfiles() {
	const [user, setUser] = useState(null)
	useEffect(() => {
		const fetchUserData = async () => {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
			const userData = await response.json()
			setUser(userData)
		}
		fetchUserData()

		return () => setUser(null)
	}, [])
	return (
		<div>
			{
				user ?
					(<div><h1>Nome: {user.name}</h1><h1>Email: {user.email}</h1></div>) :
					// (user.forEach(us => { <div><h1>Nome: {us.name}</h1><h1>Email: {us.email}</h1></div> })) :
					(<p>Carregando perfil de usuário.</p>)
			}
		</div>
	)
}

export default UserProfiles