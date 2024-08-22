import { createContext } from "react";
export const myContext = createContext()
export const MyProvider = (props) => {
	return (
		<myContext.Provider value={{ name: "Thiago" }}>
			{props.children}
		</myContext.Provider>
	)
}

// export default MyProvider