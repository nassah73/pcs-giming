import Imge from './kisspng-computer-cases-housings-cooler-master-microatx-m-malaysia-tower-5b4fefeb4c8092.9902749315319654193134-removebg-preview.png'
export default function Header(){
    return(
        <div className="bg-[#0C2C55] h-screen  mt-10">
        <Content/>
        </div>
    )
}
function Content(){
    return(
        <div className=" bg-black h-90 relative">
           
             <div className='w-50  justify-self-center absolute top-20  '>
             <img src={Imge} alt="" className="w-40 shadow-[0_0_100px_50px_rgba(255,255,255,0.2)] bg-none" />
             </div>
        </div>
    )
}