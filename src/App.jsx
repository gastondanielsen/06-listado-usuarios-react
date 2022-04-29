import React, { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ cargando, setCargando ] = useState(false);

    useEffect(() => {

      const url = 'https://jsonplaceholder.typicode.com/users';

      setCargando(true);
      const obtenerUsuarios = async () => {
        const datos = await fetch(url);
        const respuesta = await datos.json();
        // console.log(respuesta);
        setUsuarios(respuesta);
      }
      obtenerUsuarios();

      setTimeout(() => {
        setCargando(false);
      }, 2000);  

    }, []);

    return(
      <div>
        <div className="autor">GDcode</div>
        <h1 className="title">Listado de Usuarios</h1>
        <div className='container'>
          { cargando ? <p style={{ color: "#fff", textAlign: "center", marginTop: "250px"}}>Cargando...</p> : (
            <Card 
              usuarios={usuarios}
            />
          )}
        </div>
      </div>
    );

}

export default App;