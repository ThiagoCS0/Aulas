import { useState } from "react";
import './Style.css'

function Form2() {
	const [address, setAddress] = useState({ street: '', city: '', postalCode: '' })

	const handleChange = (event) => {
		const { name, value } = event.target
		setAddress(prevState => ({ ...prevState, [name]: value }))
		console.log(".:" + address.street);
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!address.street || !address.city || !address.postalCode) {
			alert("Preencha todos os campos.")
		} else {
			alert(`ENDEREÇO:\nRUA\n${address.street}\n\nCIDADE\n${address.city}\n\nCEP\n${address.postalCode}`)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Rua:<br /> <input type="text" name="street" onChange={handleChange} /></label><br />
			<label>Cidade:<br /> <input type="text" name="city" onChange={handleChange} /></label><br />
			<label>CEP:<br /> <input type="text" name="postalCode" onChange={handleChange} /></label><br /><br />
			<button type="submit">Submeter</button>
		</form>
	)
}

export default Form2