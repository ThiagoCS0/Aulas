import { useState } from 'react'
function TodoList() {
	const [toDos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const addTodo = () => { setTodos([...toDos, inputValue]); setInputValue(''); };
	return (
		<div>
			<input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
			<button onClick={addTodo}>Adicionar Tarefa</button>
			<ul> {toDos.map((toDo, index) => (<li key={index}>{toDo}</li>))} </ul>
		</div>
	)
}

export default TodoList