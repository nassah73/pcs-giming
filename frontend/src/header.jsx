import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagnifyingGlass, 
  faUser, 
  faHeart, 
  faCartShopping 
} from '@fortawesome/free-solid-svg-icons'; 
import LogoImg from './bglogo-removebg-preview.png'
import Imge from './kisspng-computer-cases-housings-cooler-master-microatx-m-malaysia-tower-5b4fefeb4c8092.9902749315319654193134-removebg-preview.png'

export default function Header(){
    return(

        <div className="bg-[#0C2C55] h-screen  mt-10">
        <Navbar/>
        <Content/>
        <Container/>
        </div>
    )
}
function Content(){
    return(
        <div className=" bg-black h-80 relative grid grid-cols-1 sm xl:grid-cols-1">
           
       <div>    
    <div className="absolute top-15 left-1/3 w-64 h-64 bg-white rounded-full blur-[100px] opacity-30 z-0">
    </div>

    <div className="relative top-8 left-1/3 z-10 ">
        <img src={Imge} alt="logo" className="w-60" />
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

function Navbar(){
    const items=['pcs','components','laptops','Gear','software','support']
    const icons =[faMagnifyingGlass,faUser,faHeart,faCartShopping]
    return(
    <div className=' flex justify-around'>
        <div className='flex '>
            <img src={LogoImg} alt="" className='w-50 ' />
        </div>
        <div  className='flex  items-center mr-[100px]'>
            <ul className='flex justify-between gap-10 text-white'>
             { items.map((item)=>{ return <li key={item} className='hover:text-yellow-200 cursor-pointer' >{item}</li>
                    
                })}
                
            </ul>
        </div>
           <div className='flex text-white'>
                 
                  { icons.map((item,index)=>{
                    return <button key={index} className="mx-2 hover:text-amber-200">
                        <FontAwesomeIcon  icon={item} />
                    </button>
                   }) 
                }
               
           </div>
    </div>
    )
}
function Container(){
    const items=['item1','item2','item3']
    return(
        <div className=''>
              <div>
                <div className='grid grid-cols-12'>
                    <div className=' col-span-3 text-gray-500 mt-2 w-80 h-85   ml-10'>
                          <h1 className='text-xl mb-2 font-[700] uppercase'>filter by</h1>
                          <div className='flex flex-col  gap-5'>
                          <select defaultValue="default" name='processor' id='processor'  >
                                <option value="default" disabled> Processor </option>
                                 {items.map((item)=>{
                                    return <option>{item}</option>
                                 })}
                            </select>
                            <hr className='text-[#BFC6C4]' />
                            <select defaultValue="default" name='cpu' id='cpu'  >
                                <option value="default" disabled> cpu </option>
                                 {items.map((item)=>{
                                    return <option>{item}</option>
                                 })}
                            </select>
                            <hr className='text-[#BFC6C4]' />
                            <select defaultValue="default" name='price range' id='price range'  >
                                <option value="default" disabled> price range </option>
                                 {items.map((item)=>{
                                    return <option>{item}</option>
                                 })}
                            </select>
                             <hr className='text-[#BFC6C4]' />
                            <select defaultValue="default" name='case type' id='case type'  >
                                <option value="default" disabled> case type </option>
                                 {items.map((item)=>{
                                    return <option>{item}</option>
                                 })}
                            </select>
                             <hr className='text-[#BFC6C4]' />
                            <select defaultValue="default" name='brand' id='brand'  >
                                <option value="default" disabled> Brand</option>
                                 {items.map((item)=>{
                                    return <option>{item}</option>
                                 })}
                            </select>
                             <hr className='text-[#BFC6C4] ' />
                             </div>
                    </div>
                    <div className=' bg-amber-400 col-span-9'>
                           <h1 className='font-[600] text-white uppercase text-2xl'  >Featured caming rigs</h1>
                    </div>
                </div>
              </div>
        </div>
    )
}
