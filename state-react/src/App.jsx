import { useState } from 'react'

function App() {
  const [msg, setmsg] = useState("");
  const [todo, setTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const isEditing = editingIndex !== null;

  function edit(id) {
    setEditingIndex(id);
    setEditingText(todo[id]);
  }

  function save() {
    if (editingIndex !== null) {
      setTodo(
        todo.map((item, index) => {
          if (index === editingIndex) {
            return editingText;
          }
          return item;
        })
      );
      setEditingIndex(null);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className='text-center my-3 text-primary fw-bold'>Todo List</h1>
        <input className='form-control my-3' type="text" onChange={(e) => setmsg(e.target.value)} value={msg} placeholder="Enter your message" />
        <button className='btn btn-primary' onClick={() => setTodo([...todo, msg])}>Save</button>
        <div className='card my-3'>
          {todo.map((item, index) => {
            return (
              <div className='card-body' key={index}>
                <h5 className='card-title'>{index + 1}. {item}</h5>
                <button className='btn btn-primary' onClick={() => edit(index)}>
                  Edit
                </button>
                <button className='btn btn-danger ms-2' onClick={() => setTodo(todo.filter((_, i) => i !== index))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {isEditing && (
          <div className='card my-3'>
            <div className='card-body'>
              <h5 className='card-title'>Edit</h5>
              <input className='form-control' type="text" value={editingText} onChange={(e) => setEditingText(e.target.value)} />
              <button className='btn btn-primary mt-2' onClick={save}>
                Save
              </button>
              <button className='btn btn-danger mt-2 ms-2' onClick={() => setEditingIndex(null)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
