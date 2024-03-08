import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DemostracionComponent = () => {
  const history = useHistory();
  
  useEffect(() => {
    // Suponiendo que tienes una función que verifica si el usuario está autenticado
    if (!estaAutenticado()) {
      history.push('/login');
    }
  }, [history]);

  // El resto de tu componente
  return (
    // ... tu JSX ...
  );
};

function estaAutenticado() {
  // Aquí verificarías por ejemplo el almacenamiento local, o el estado global (como Redux) para ver si el usuario está autenticado
  return localStorage.getItem('usuarioAutenticado') === 'true'; // ejemplo simple
}

export default DemostracionComponent;
