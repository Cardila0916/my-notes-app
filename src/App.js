import { useEffect, useState } from 'react';
import './App.css';
import Notes from './Components/Notes/Notes';
import SideNav from './Components/SideNav/SideNav';

function App() {
  
  const items = JSON.parse(localStorage.getItem("notes") || '[]');

  const [addNote, setAddNote] = useState(items);
  const [favorite, setFavorite] = useState(false);
  const [delAlert, setDelAlert] = useState(false);

  const handleAlert = () => {
    setDelAlert(true);
  }

  const handleAdd = (color) => {
    setAddNote([
      ...addNote,
      {
        note: "",
        color: color,
        currDate: new Date().toLocaleString('en-GB'),
        favorite: false
      }
    ])
  }

  const handleAddText = (e, index) => {
    addNote[index].note = e.target.value;
    localStorage.setItem("notes", JSON.stringify(addNote));
  }

  const handleFavorite = (index) => {
    if (!addNote[index].favorite) {
      addNote[index].favorite = true
    } else {
      addNote[index].favorite = false
    }
    setFavorite(!favorite)
  }

  const handleDelete = (index) => {
    console.log('ls', items[index]);
    addNote.splice(index, 1);
    items.splice(index, 1);
    handleAlert()
  }

  useEffect(() => {
    setTimeout(() => {
      setDelAlert(false)
    }, 2000)
    localStorage.setItem("notes", JSON.stringify(addNote));
  }, [addNote, favorite, delAlert]);

  return (
    <div className="App">
      {
        delAlert ? <div className='deleteAlert'>Note Deleted</div> : null
      }
      <SideNav handleAdd={handleAdd} />
      <Notes noteItems={addNote} handleAddText={handleAddText} handleDelete={handleDelete} handleFavorite={handleFavorite} />
    </div>
  );
}

export default App;
