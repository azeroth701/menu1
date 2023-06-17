import React, { useState } from 'react';

function App() {
  const [mostrarImagen, setMostrarImagen] = useState(false);

  const handleClick = () => {
    setMostrarImagen(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostrar imagen</button>
      {mostrarImagen && (
        <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
      )}
    </div>
  );
}

export default App;
