import { useState } from 'react'

function App() {
  const [msg, setmsg] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <input type="text" onChange={(e) => setmsg(e.target.value)} value={msg} placeholder="Enter your message" />
      <button onClick={() => setTodo([...todo, msg])} className='btn btn-primary'>Save</button>
      <ol>
        {todo.map((item, index) => {
          return (
            <li className='list-group-item p-2' key={index}>
              {index + 1}. {item}
              <button className='btn btn-danger ms-2' onClick={() => setTodo(todo.filter((_, i) => i !== index))}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  )
}

export default App
