const Addresses = ( ) => {

    return (


        <div className=" w-full h-full flex-justify-around bg-[#161430c2] ">

            <div className="h-full flex gap-4 text-center">

                <a href="#home">
                    <div className="sm:w-[50px] md:w-[200px] h-full bg-[#0e1c35] hover:bg-[#1b1c6bb0]">
                    <span className="md:text-xl md:font-bold text-[#3cd8ff]">Home</span>
                       <img className="h-12" src="/castillo.jpg" alt="" />
                    </div></a>
                <a href="#proyects">
                    <div className="sm:w-[50px] md:w-[200px] h-full bg-[#0e1c35]  hover:bg-[#1b1c6bb0]">
                    <span className="md:text-xl md:font-bold text-[#3cd8ff]">Proyects</span>
                    <img className="h-12 w-16" src="/proyects.jpg" alt="" />
                    </div></a>
                <a href="#about-me">
                    <div className="sm:w-[50px] md:w-[200px] h-full bg-[#0e1c35] hover:bg-[#1b1c6bb0] ">
                    <span className="md:text-xl md:font-bold text-[#3cd8ff]">Abount</span>
                    <img className="h-12  w-14" src="/Mario.jpg" alt="" />
                    </div> </a>
                <a href="#contact-me">
                    <div className="sm:w-[50px] md:w-[200px] h-full bg-[#0e1c35] hover:bg-[#1b1c6bb0]">
                        <span className="md:text-xl md:font-bold text-[#3cd8ff]">Contact me</span>
                        <img className="h-12  w-20" src="/Adresses.jpg" alt="" />
                    </div></a>


            </div>



        </div>
        






    )
}

export default Addresses; 