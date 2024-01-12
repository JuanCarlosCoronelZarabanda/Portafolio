const MyProyects = () => {
  return (
    <div className=" pr-20">
      <div className="grid grid-cols-[repeat(auto-fit,_500px)] justify-center gap-4 w-full mx-auto pt-10 pl-40">

      <div className='w-80 md:hover:w-[400px] hover:gap-0 pt-20  border-[#08dcf8] border-[3px]'>
          <a href="https://entregable1-livid.vercel.app/" target="_blank" className="">
            <img className="" src="/cokies.png" alt="project" />
            <p className="">
              <span>
                COKIES-INFO.
                En esta practica aprendi:  Componentes, Props y useState.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo consequatur ratione similique deserunt rem maiores, consectetur cumque? Hic, quo nesciunt voluptatum ipsam reiciendis, cupiditate quas ut omnis numquam, voluptatibus magnam?
              </span>
            </p>
          </a>
        </div>

        <div className='w-80 aspect-square md:hover:w-[400px] hover:gap-0  border-[#08dcf8] border-[3px]'>
          <a href="https://juancarloscoronelzarabanda.github.io/e-commerce/" target="_blank" className="project project-tile">
            <img className="project-image" src="https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie2_utnolh.png" alt="project" />
            <p className="project-title">
              <span>
                E-COMERCE.
                En esta practica aprendi: aqui pienzo hacer un nuevo e-comerce con react
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus voluptatem neque, aliquid illum, molestias ipsam tempora dignissimos assumenda, reprehenderit alias perspiciatis dolore!
              </span>
            </p>
          </a>
        </div>
        <div className='w-80 aspect-square md:hover:w-[400px] hover:gap-0  border-[#08dcf8] border-[3px]'>
          <a href="https://pokedex5.vercel.app/" target="_blank" className="">
            <img className=" " src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="project" />
            <p className="project-title">
              <span>
                POKEDEX.
                En esta practica aprendi: React router y Redux.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis, nulla numquam, enim ipsa optio officiis voluptatem omnis saepe in repellat expedita, harum architecto! Expedita quae architecto impedit ea non?sint omnis hic, fugit ratione explicabo rem. Enim quis reiciendis cum. In, maxime exercitationem?
              </span>
            </p>
          </a>
        </div>

       

        <div className='w-80 aspect-square md:hover:w-[400px] hover:gap-0  border-[#08dcf8] border-[3px]'>
          <a href="https://entregable2-blue.vercel.app/" target="_blank" className=" ">
            <img className=" h-[400px]" src="/Untitled.png" alt="project" />
            <p className=" ">
              <span>
                WEATHER APP.
                En esta practica aprendi: useEffect y consumo de API’s
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat consequatur, consectetur obcaecati quia vel laudantium sint omnis hic, fugit ratione explicabo rem. Enim quis reiciendis cum. In, maxime exercitationem?
              </span>
            </p>
          </a>
        </div>
        <div className='w-80 aspect-square md:hover:w-[400px] hover:gap-0 pt-0  border-[#08dcf8] border-[3px]'>
          <a href="https://entregable3-phi.vercel.app/" target="_blank" className="project project-tile">
          <img src="https://entregable3-phi.vercel.app/img2.png" alt="" className="h-[300px]"/>
            <img className=" " src="https://entregable3-phi.vercel.app/img3.png" alt="project" />
            <p className=" ">
              <span>
                RICK AND MORTY.
                En esta practica aprendi: Listas y Keys, inputs controlados, renderizado condicional. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur ipsam ullam debitis minima quae sunt cum facere iusto perspiciatis.
              </span>
            </p>
          </a>
        </div>
        <div className='w-80 aspect-square md:hover:w-[400px] hover:gap-0  border-[#08dcf8] border-[3px] pt-36'>
          <a href="https://usuarios4.vercel.app/" target="_blank" className="project project-tile">
            <img className=" " src="/123.png" alt="project" />
            <p className=" ">
              <span>
                USERS.
                En esta practica aprendi: CRUD’s y métodos HTTP
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam perferendis, distinctio iure consectetur, dignissimos quae nisi unde maiores aliquam facere quia nihil? Architecto aliquam sit recusandae! Doloribus, adipisci ducimus. 
              </span>
            </p>
          </a>
        </div>





      </div></div>
  )
}

export default MyProyects