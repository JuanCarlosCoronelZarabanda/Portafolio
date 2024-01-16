const AbountMe = () => {
    return (
        <div>
            <div className=" " >

                <div className='pl-[1px] grid grid-cols-[repeat(auto-fit,_500px)] justify-center gap-2  mx-auto py-20 pr-[100px]'>
               
                     <div className='pl-5'>
                    <h1 className='text-[#0c08f8] text-2xl  font-extrabold py-2'>Discover</h1>
                    <hr className='sm:w-full md:w-[480px] border-[#0c08f8]  border-[2px]'/>
                        <img className='h-[400px] w-[480px] py-2' src='https://fire-hoodie-356.notion.site/image/https%3A%2F%2Fi.imgur.com%2FNiTjnID.gif?table=block&id=f97dcb84-d096-457a-bfe5-3c197911c4b9&spaceId=863c4272-6152-4a40-b4a1-84d6994c54bb&userId=&cache=v2' alt='' />
                    </div> 
 
                    <div className='pl-28 pr-2'>
                        
                        <h1 className='text-4xl py-6'>About Me</h1>
                        <hr className='sm:w-60 md:w-96 border-[#0c08f8]  border-[2px]' />
                        <h1 className='py-7'>I am a Highly motivated Web Developer, Willing to solve and execute projects with all the skills I have.</h1>
                        <div className='flex justify-center p-5 
           w-full  border-[#0c08f8] border-[3px]'>
                            <ul>
                                <li>Name: Juan Carlos Coronel Zarabanda</li>
                                <li>Phone: +57 3224328940</li>
                                <li>Age: 26 </li>
                                <li>Address: Arauca Colombia</li>
                            </ul>
                            <ul>
                                <li>Freelance: Available</li>
                                <li>Email: jcoronelzarabanda@gmail.com</li>
                                <li>Linkedln: Juan Carlos Coronel Zarabanda</li>
                                <li>Hobbie: Gardening</li>
                            </ul>
                        </div> 
                        <div className='py-10'>
                            <a href="https://drive.google.com/file/d/1EbJhO-X36ErpZkOf-bGzma8-V6ibB2UD/view?usp=sharing"> 
                            <div className='bg-[#0c08f8] hover:bg-[#08dcf8] px-5 py-2 flex-justify-end'>
                                <span>
                                Visualize CV Freely  
                                </span>

                            </div>
                            </a>
                        </div> 
                    </div>


                </div> 
            </div></div>
    )
}

export default AbountMe