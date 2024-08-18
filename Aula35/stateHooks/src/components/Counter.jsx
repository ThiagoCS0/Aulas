import { useState } from 'react'
import './StyleCounter.css'

function Counter() {
	// const stateData = useState() const [count, setCount] = useState(0);
	const [tx, TXT] = useState('');
	return (
		<div>
			{/* <div> <p>Voccê clocou {count} vezes</p> <button onClick={() => { setCount(count + 1) }}>Clique aqui</button> </div> */}
			<div>
				<input type="text" name="txt" id="txt" placeholder='Digite aqui' onChange={(e) => TXT(e.target.value)} />
			</div>
			<div>
				<p> {tx} </p>
			</div>
		</div>
	)
}

export default Counter