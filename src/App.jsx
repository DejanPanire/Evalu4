import { useState, useEffect } from 'react';
import {Routes, route} from "react-routes-dom"
import Form from './CArepta/form';
import Liss from './CArepta/list';

import fertch from './CArepta/fetch';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [itemparaeditar, setItemEdit] = useState(null);

  useEffect(() => {
    const almacenDeDatos = JSON.parse(localStorage.getItem('items')) || [];
    setItems(almacenDeDatos);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const itemeditable = (value) => {
    if (itemparaeditar) {
      setItems(items.map(item =>
        item.id === itemparaeditar.id ? { ...item, value } : item
      ));
      setItemEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteitem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const edititem = (item) => {
    setItemEdit(item);
  };

  return (
     <div className="App">
      <div className="main-card">
      <h1>Experimento CRUD</h1>
      <Form
        itemeditable={itemeditable}
        itemparaeditar={itemparaeditar}
      />
      <Liss
        items={items}
        deleteitem={deleteitem}
        edititem={edititem}
      />
    </div>
      <div>
        <Routes>
           <Route path="/axios" element={<axs/>}/>
           <Route path="/fetch" element={< fertch/>} />
        </Routes>

      </div>
  </div>
  );
}

export default App;
