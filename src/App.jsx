import React from 'react';
import './App.css';
import CanCodes from './components/CanCodes';
import { IconHeartCode } from '@tabler/icons-react';
import AbountMe from './components/AbountMe';
import MyProyects from './components/MyProyects';
import Addresses from './components/Addresses';
import ContactMe from './ContactMe';

function App() {
  return (
    <main className='bg-[#0e0d16]  text-[#ffffff]' >
      <header className=' h-20  fixed w-full '>
        <Addresses/>
        </header>
      <div className='grid grid-cols-2 items-start bg-[#0e0d16]'  id="home">
        <div className='px-[20px] w-full grid md:grid-cols-2 gap-1 pt-[200px]  pr-[60%]'>
          <div className='md:pl-[60px] w-[300px]'>
            <img src='/photo.jpeg' className='rounded-full w-[200px] h-[200px] border-[10px] hover:border-[15px] border-[#0d166b77]' alt='photo' />
          </div>
          <div className='w-[400px] md:pl-[200px] lg:pl-40 h-[70%]'>
            <h1 className='text-4xl font-extrabold  '><span className='text-[#1d4983]' >Hi!</span> I’am Juan Carlos Coronel Zarabanda a backend developed.
            </h1>
          </div>
          <h1 className='text-3xl pl-0 text-[#08dcf8] font-bold flex justify-stretch'><IconHeartCode size={40} />I Can:</h1>
        </div>
        <img src="/Frame.png" alt="" className='sm:h-1 sm:w-1 md:h-[400px] md:w-[500px] sm:pt-[700px] md:pt-0 lg:h-[500px] lg:w-[700px]  lg:pt-0' />
      </div>
      <div style={{ backgroundImage: 'url("/Ellipse.png")' }} >
        <CanCodes />
        <hr className=" border-[#08dcf8] border-[1px]"/>
        <div id="proyects" className='text-center '>
          <div className='py-10'>
            <h1 className='text-3xl font-bold text-[#19265f] pe-5'>My proyects</h1>
       
          </div>
         <hr className=" border-[#08dcf8]  border-[1px]"/>
        <MyProyects />
        </div>
        <div id='about-me'><AbountMe />
        </div>      
        <div className=' bg-[#060718]' id='contact-me'>
          <ContactMe/>
        </div>
      </div>
    </main>
  );
}

export default App;