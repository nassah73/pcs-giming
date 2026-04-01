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
        <div className=" bg-black h-80 relative">
           
       <div>    {/* 1. هاد الـ div هي الإضاءة (Glow) بوحدها */}
    <div className="absolute top-15 justify-self-center w-64 h-64 bg-white rounded-full blur-[100px] opacity-30 z-0">
        {/* هادي خاوية، خدمتها غير تعطي الضوء */}
    </div>

    {/* 2. هاد الـ div هي اللي هازة الصورة باش تبقى الفوق */}
    <div className="relative top-20 z-10 justify-self-center">
        <img src={Imge} alt="logo" className="w-40" />
    </div>
        </div>
        <div className=' z-20 w-80 absolute right-1/5 top-25 leading-[2.5]  '>
            <h1 className=' text-2xl text-white uppercase tracking-[2px] font-[600]'>buy your ultimate pc</h1>
            <p className=' text-white '>power,performance.perfection </p>
            <button className='uppercase bg-blue-500 text-white rounded-[5px] px-5.5 hover:bg-blue-600 text-[13px]'>customize &buy now</button>
        
        </div>
        </div> 
    )
}