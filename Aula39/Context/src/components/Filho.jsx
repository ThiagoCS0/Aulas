import { useContext } from "react"
import { MyProvider } from "./Contexto"

const MyChildren = () => {
	const context = useContext(MyProvider)
	return (
		<div>
			Meu nome é {context.name}
		</div>
	)
}

export default MyChildren