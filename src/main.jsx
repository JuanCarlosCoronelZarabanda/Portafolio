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
      
          <div className="fixed top-20 right-0">
          <button className="p-3 " onClick={changeString}>
        {currentApp.type === App1 ? (
          <>
           <img className='h-[80px] hidden' src="/sol.png" alt="" />
            <img className='h-[50px]' src="/luna.png" alt="" />
           
          </>
        ) : (
          <>
            <img className='h-[80px]' src="/sol.png" alt="" />
            <img className='h-[50px] hidden' src="/luna.png" alt="" />
          </>
        )}
      </button>
         </div>
      {currentApp} 
      
      </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);



 