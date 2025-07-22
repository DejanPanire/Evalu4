import React, { useEffect, useState } from "react";
import axios from "axios";

function axs() {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://weatherstack.com/')
      .then((response) => {
        setData(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setError(error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Ocurrió un error al obtener los datos.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(data => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default axs;
