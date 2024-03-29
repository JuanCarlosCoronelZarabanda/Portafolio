import React from 'react';
import './App.css';
import CanCodes from './components/Dark-mode/CanCodes';
import { IconHeartCode } from '@tabler/icons-react';
import AbountMe from './components/Dark-mode/AbountMe';
import MyProyects from './components/Dark-mode/MyProyects';
import ContactMe from './components/Dark-mode/ContactMe';
import Addresses from './components/Dark-mode/Addresses';


function App() {
  return (
    <main className='bg-[#46e9ff]  text-[#111533]' >
       <header className=' h-20  fixed w-full '>
         <Addresses /> 
      </header>
      <div className='grid grid-cols-2 items-start bg-[#5145fa]' id="home">
        <div className='px-[20px] w-full grid md:grid-cols-2 gap-1 pt-[200px]  pr-[400px]'>
          <div className='md:pl-[60px] w-[300px]'>
            <img src='/photo.jpeg' className='rounded-full w-[200px] h-[200px] border-[10px] hover:border-[15px] border-[#0d166b77]' alt='photo' />
          </div>
          <div className='w-[300px] md:pl-[200px] lg:pl-40 h-[70%]'>
            <h1 className='text-4xl font-extrabold  '><span className='text-[#2c8d80]' >Hello!</span>  I am not a robot, I am Juan Carlos Coronel, a web developer.
            </h1>
          </div>
          <h1 className='text-3xl  text-[#1f2e5f] font-bold flex justify-stretch'><IconHeartCode size={40} />I Can:</h1>
        </div>
        <div  className='sm:h-1 py-40 sm:w-1 md:h-[400px] md:w-[500px] md:pt-0 lg:h-[500px] lg:w-[700px]  lg:pt-0'>
          <img src="/Frame.png" alt=""  className='hover:max-[500px]:'/>
        </div>
        
      </div>
        <div style={{ backgroundImage: 'url("/Ellipse.png")' }}   > 
        
        <CanCodes />
        <hr className=" border-[#431f64] border-[1px]" />
         <div id="proyects" className='text-center '>
          <div className='py-10'>
            <h1 className='text-3xl font-bold text-[#216094] pe-5'>My proyects</h1>

          </div> 
          <hr className=" border-[#431f64]  border-[1px]" />
        <div className='ps-20'>  
          <MyProyects />
        </div> 
         <div id='about-me'><AbountMe />
       </div> 
        <div className=' bg-[#45caf3]' id='contact-me'>
          <ContactMe />
        </div>   
      </div>
      </div>
    </main>
  );
}

export default App;