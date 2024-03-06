import React from "react";
import "./App.css";
import CanCodes from "./components/CanCodes";
import { IconHeartCode } from "@tabler/icons-react";
import AbountMe from "./components/AbountMe";
import ContactMe from "./components/ContactMe";
import Addresses from "./components/Addresses.jsx";
import Gallery from "./components/MyProyects";

function App() {
  return (
    <main className="bg-[#09080e]  text-[#ffffff]">
      <header className=" h-20  fixed w-full ">
        <Addresses />
      </header>
      <div
        className="grid grid-cols-2 items-start md:pl-20  sm:pr-20 bg-[#0a0816]"
        id="home"
      >
        <div className="px-[10px] md:px-0 sm:pl-0 w-full grid md:grid-cols-2 gap-0 pt-[200px] ">
          <div className="md:pl-[60px] w-[300px]">
            <img
              src="/photo.jpeg"
              className="rounded-full w-[200px] h-[200px] border-[10px] hover:border-[15px] border-[#0d166b77]"
              alt="photo"
            />
          </div>
          <div className="w-[300px] md:pl-[100px] lg:pl-0 md:h-[300px] md:w-[230px] h-[70%]">
            <h1 className="text-4xl font-extrabold  ">
              <span className="text-[#216094]">Hello!</span> I am not a robot, I
              am Juan Carlos Coronel, a web developer.
            </h1>
          </div>
          <h1 className="text-3xl  text-[#08dcf8] font-bold flex justify-stretch">
            <IconHeartCode size={40} />I Can:
          </h1>
        </div>
        <div className="sm:h-[500px] py-40 sm:w-[500px] md:h-[400px] md:w-[500px] md:pt-0  lg:h-[500px] lg:w-[700px]  lg:pt-0">
          <img
            src="/Frame.png"
            alt=""
            className="hover:max-[500px] md:pt-0 sm:pt-[200px]"
          />
        </div>
      </div>
      <div style={{ backgroundImage: 'url("/Ellipse.png")' }}>
        <CanCodes />

        <hr className=" border-[#08dcf8] border-[1px] " />
        <div className="py-4 text-center ">
          <h1 className="text-3xl font-bold text-[#216094] pe-5">
            My proyects
          </h1>
        </div>
        <hr className=" border-[#08dcf8]  border-[1px]" />
       

        <div id="proyects" className="text-center">

        <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/87/2c/ab/872cab564cb7eaf7cb9535da24eb2c6d.gif")',
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              height: "550px",
              width: "100%",
            }}
            className="h-[3000px] "
          >
            {/* <MyProyects /> */}
            <Gallery />
          </div>

         <div className="hidden md:block md:pl-48">
          <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/d5/66/4e/d5664e6db68e21ae002431b9fd13ed2d.gif")',
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              height: "900px",
              width: "1000px",
            }}
            className=" "
          >
             <div className="h-32 md:h-[400px]"></div>
           <a href="https://github.com/JuanCarlosCoronelZarabanda?tab=repositories">
              
              <div className=" ">
                
                <span className="text-6xl font-extrabold  ">API🍵RESTful</span>
              </div>
          </a>
          </div> 
          </div>

          
          <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/d5/66/4e/d5664e6db68e21ae002431b9fd13ed2d.gif")',
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              height: "500px",
              width: "100%",
            }}
            className="sm:hidden"
          >
             <div className="h-32 md:h-[400px]"></div>
           <a href="https://github.com/JuanCarlosCoronelZarabanda?tab=repositories">
              
              <div className=" ">
                
                <span className="text-6xl font-extrabold  ">API🍵RESTful</span>
              </div>
          </a>
          </div> 
          
        

          <div id="about-me" className="">
            <AbountMe />
          </div>
          <div className=" bg-[#030411]" id="contact-me">
            <ContactMe />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
