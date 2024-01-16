import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App1 from './App1'; // Importa el componente original
import App2 from './App2'; // Importa el nuevo componente

function Main() {
  const [currentApp, setCurrentApp] = useState(<App1 />);

  const changeString = () => {
    // Cambia el componente actual basado en el estado actual
    setCurrentApp((prevApp) => (prevApp.type === App1 ? <App2 /> : <App1 />));
  };


  return (
    <React.StrictMode>
      
          <div className="fixed top-20 right-28 pl-16">
        <button className="h-12 w-32 bg-yellow-200" onClick={changeString}>
          DarkMode
        </button>
         </div>
      {currentApp} 
      
      </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);



 