import React, { useState, useEffect } from 'react';

export default function TituloAnimado({ texto, velocidad = 100 }: { texto: string; velocidad?: number }) {
  const [textoMostrado, setTextoMostrado] = useState("");

  useEffect(() => {
    let longitudActual = 0;
    
    // Limpiar el texto cada vez que el efecto se ejecuta para manejar remontajes de React Strict Mode
    setTextoMostrado(""); 

    const temporizador = setInterval(() => {
      longitudActual++;
      setTextoMostrado(texto.substring(0, longitudActual));
      
      if (longitudActual >= texto.length) {
        clearInterval(temporizador);
      }
    }, velocidad);

    return () => clearInterval(temporizador);
  }, [texto, velocidad]);

  return <h1 className="titulo-principal" id="titulo">{textoMostrado || "\u00A0"}</h1>;
}
