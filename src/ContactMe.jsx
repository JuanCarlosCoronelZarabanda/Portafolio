import { IconBrandGithub } from "@tabler/icons-react"
import { IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"

const ContactMe = () => {
    return (
        <div>

            <div className="flex items-center sm:px-20 sm:gap-5 md:px-72 md:py-60 md:gap-40  ">
                   <a href="https://www.linkedin.com/in/juan-carlos-coronel-zarabanda-241004295/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BY24otRZaR1yrs3u3zGR1qA%3D%3D">
                <div className=" hover:bg-[#212258] text-center">
                    <h1 className=" text-[#08dcf8]"><IconBrandLinkedin stroke-width="3" width="100" height="100" />Juan Carlos Coronel Zarabanda </h1>
                </div></a>
                <a href="https://github.com/JuanCarlosCoronelZarabanda?tab=repositories">
                <div className=" hover:bg-[#212258] text-center">
                    <h1 className=" text-[#08dcf8]"> <IconBrandGithub stroke-width="3" width="100" height="100" /> Juan Carlos Coronel Zarabanda </h1>
                </div></a>
                <a href="jcoronelzarabanda@gmail.com">
                <div className=" hover:bg-[#212258] text-center">
                    <h1 className=" text-[#08dcf8]"> <IconMail stroke-width="3" width="100" height="100" />jcoronelzarabanda@gmail.com</h1>
                </div></a>
                <a href="https://web.whatsapp.com/">
                <div className=" hover:bg-[#212258] text-center">
                    <h1 className=" text-[#08dcf8]"><IconBrandWhatsapp stroke-width="3" width="100" height="100" />3224328940 / 3005478524 </h1>
                </div></a>
            </div>
            <div className="w-full bg-[#0e0d16] h-20">
            </div>
        </div>

    )
}

export default ContactMe