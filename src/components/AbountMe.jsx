const AbountMe = () => {
    return (
        <div>
            <div className="w-full h-[1%] " >

                <div className='grid grid-cols-[repeat(auto-fit,_500px)] justify-center gap-2  mx-auto py-20'>
                    <div className='pr-10  pt-[240px]'>
                        <img className='h-[500px] ' src='https://fire-hoodie-356.notion.site/image/https%3A%2F%2Fi.imgur.com%2FNiTjnID.gif?table=block&id=f97dcb84-d096-457a-bfe5-3c197911c4b9&spaceId=863c4272-6152-4a40-b4a1-84d6994c54bb&userId=&cache=v2' alt='' />
                    </div>

                    <div className='px-10 py-40 '>
                        <h1 className='text-[#08dcf8] text-2xl  font-extrabold'>Discover</h1>
                        <h1 className='text-4xl py-6'>Abount Me</h1>
                        <hr className='w-40 border-[#08dcf8]  border-[2px]' />
                        <h1 className='py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facere dolorum, tenetur cumque nobis veniam laborum sequi ducimus neque iure, cupiditate eaque blanditiis voluptate ad sed rem incidunt quisquam explicabo?</h1>
                        <div className='flex justify-center p-5 
           w-full  border-[#08dcf8] border-[3px]'>
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
                                <li>Ramdon: sdhkjfhsdhfsdjfhfsdfhsdk</li>
                            </ul>
                        </div>
                        <div className='py-10'>
                            <button className='bg-[#0f9fb3] hover:bg-[#08dcf8] px-5 py-2 flex-justify-end'>
                                <span>
                                    DOWNLOAD CV
                                </span>

                            </button>
                        </div>
                    </div>


                </div>
            </div></div>
    )
}

export default AbountMe