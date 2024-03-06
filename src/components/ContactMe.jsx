import { IconBrandGithub } from "@tabler/icons-react"
import { IconCheese } from "@tabler/icons-react"
import { IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"

const ContactMe = () => {
    return (
        <div style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/19/78/c9/1978c9953ad4cc1f2de6df68fea83d5c.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            height: "700px",
            width: "full",
          }}>

            <div className="sm:grid-cols-2 sm:px-20 sm:gap-5 md:pr-72 md:py-60 md:gap-40 md:flex items-start  ">
                
                   <a href="https://www.linkedin.com/in/juan-carlos-coronel-zarabanda-241004295/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BY24otRZaR1yrs3u3zGR1qA%3D%3D">
                <div className=" hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandLinkedin stroke-width="3" width="100" height="100" />
                </div>
                    <h3 className=" text-[#08dcf8]">Juan Carlos Coronel Zarabanda </h3>
                </div></a>

                <a href="https://github.com/JuanCarlosCoronelZarabanda?tab=repositories">
                <div className=" hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandGithub stroke-width="3" width="100" height="100" />
                </div>
                    <h3 className=" text-[#08dcf8]"> Juan Carlos Coronel Zarabanda </h3>
                </div></a>

                <a href="mailto:jcoronelzarabanda@gmail.com">
                <div className=" hover:bg-[#212258] text-center ">
                <div className="px-11 md:px-10 ">
                <IconMail stroke-width="3" width="100" height="100" />
                </div>
                    <h3 className=" text-[#08dcf8]"> jcoronelzarabanda@gmail.com</h3>
                </div></a>

                <a href="https://wa.link/2u6a6c">
                <div className="grid-cols-1 hover:bg-[#212258] text-center">
                <div className="px-11 md:px-10">
                <IconBrandWhatsapp stroke-width="3" width="100" height="100" />
                </div>
                    <h3 className=" text-[#08dcf8]">+57 3224328940 </h3>
                </div></a>

            </div>
            <div className="w-full bg-[#0e0d16] h-32 pt-10 text-center">
                <span>Merendemos...</span>
            </div>
        </div>

    )
}

export default ContactMe