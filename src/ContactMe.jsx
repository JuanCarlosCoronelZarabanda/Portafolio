import { IconBrandGithub } from "@tabler/icons-react"
import { IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"

const ContactMe = () => {
    return (
        <div>

            <div className="sm:grid-cols-2 sm:px-20 sm:gap-5 md:px-72 md:py-60 md:gap-40 md:flex items-start  ">
                
                   <a href="https://www.linkedin.com/in/juan-carlos-coronel-zarabanda-241004295/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BY24otRZaR1yrs3u3zGR1qA%3D%3D">
                <div className=" hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandLinkedin stroke-width="3" width="50" height="50" />
                </div>
                    <h3 className=" text-[#08dcf8]">Juan Carlos Coronel Zarabanda </h3>
                </div></a>

                <a href="https://github.com/JuanCarlosCoronelZarabanda?tab=repositories">
                <div className=" hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandGithub stroke-width="3" width="50" height="50" />
                </div>
                    <h3 className=" text-[#08dcf8]"> Juan Carlos Coronel Zarabanda </h3>
                </div></a>

                <a href="jcoronelzarabanda@gmail.com">
                <div className=" hover:bg-[#212258] text-center ">
                <div className="px-11 md:px-10 ">
                <IconMail stroke-width="3" width="50" height="50" />
                </div>
                    <h3 className=" text-[#08dcf8]"> jcoronelzarabanda
                    @gmail.com</h3>
                </div></a>

                <a href="https://web.whatsapp.com/">
                <div className="grid-cols-1 hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandWhatsapp stroke-width="3" width="50" height="50" />
                </div>
                    <h3 className=" text-[#08dcf8]">+57 3224328940 +57 3005478524 </h3>
                </div></a>

            </div>
            <div className="w-full bg-[#0e0d16] h-20">
            </div>
        </div>

    )
}

export default ContactMe