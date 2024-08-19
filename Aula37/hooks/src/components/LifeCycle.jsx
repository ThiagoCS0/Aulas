import { useState, useEffect } from 'react'

function TimerComponent() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		const timeId = setInterval(() => { setCount(prevCount => prevCount + 1) }, 1000)
		return () => {
			clearInterval(timeId)
			console.log('Timer foi limpo')
		}
	}, [count])
	return <h1>{count}</h1>
}

export default TimerComponent