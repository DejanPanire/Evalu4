import React, { useEffect, useState } from "react"
//version fertc
function fertch() {
  const [Data, camDAta] = useState([]);
  const [cargando, cambiacargando] = useState(true);
  const [Error, seterror] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        camDAta(data);
        cambiacargando(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        seterror(error);
        cambiacargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (Error) return <p>Error al obtener los datos.</p>;

  return (
    <div className="contenedor">
      <h1>Listado de Posts</h1>
      <div className="nota-evaluacion">
        <h2>Lista</h2>

      </div>

      <ul>
        {Data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default fertch;
