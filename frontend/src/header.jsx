import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Imga from './bglogo-removebg-preview.png'
import Objet2 from './objet2'
import IMgAds from './Gemini_Generated_Image_7mqz4u7mqz4u7mqz.png'
import 'swiper/css';
import { 
  faMagnifyingGlass, 
  faUser, 
  faHeart, 
  faCartShopping ,
  faChevronLeft,    // سهم اليسار
  faChevronRight
 
} from '@fortawesome/free-solid-svg-icons'; 
import LogoImg from './bglogo-removebg-preview.png'
import Imge from './kisspng-computer-cases-housings-cooler-master-microatx-m-malaysia-tower-5b4fefeb4c8092.9902749315319654193134-removebg-preview.png'
import Objet from './objet';
export default function Header(){
    return(

        <div className="bg-[#0C2C55] w-screen overflow-x-hidden  mt-10">
        <Navbar/>
        <Content/>
        <Container/>
        <Beffotter/>
        <Foter/>
       <hr  className='text-white'/>
       <CopieRhit/>
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
                    <div className=' col-span-9'>
                        
                           <h1 className='font-[600] col-span-1 text-white uppercase text-2xl' >Featured caming rigs</h1>
                           <div className='col-span-8 h-[100%]  ml-10'>
                                    <nav className='justify-self-end'>
       
                                   <button className='prvBtn w-20 h-6 rounded-[5px] text-white'><FontAwesomeIcon icon={faChevronLeft} /></button>
                                   <button className='NextBtn  w-20 h-6 rounded-[5px] text-white'><FontAwesomeIcon icon={faChevronRight} /></button>
                                 
                                     </nav>
                                            <Swiper
                                        
                                                  spaceBetween={20}
                                                  slidesPerView={3}
                                                  modules={[Navigation, Pagination, Autoplay]}
                                                  
                                                  navigation={{
                                                      nextEl: '.NextBtn', 
                                                      prevEl: '.prvBtn',
                                                              }}
                                                  autoplay={{ delay: 3000 }}
                                                  pagination={{ clickable: true }}
                                            >                                       
                                           {Objet.map((item) => (
                                                 <SwiperSlide key={item.id}>
                                                         <div className='bg-white/5 backdrop-blur-md rounded-2xl p-4 h-full flex flex-col'>
                                    <img src={item.img} alt={item.name} className='w-full h-40 object-contain bg-amber-700 rounded-xl' />
                                    <h1 className='text-white text-xl font-bold mt-4'>{item.name}</h1>
                                    <p className='text-gray-300 text-sm my-2 flex-grow'>{item.description}</p>
                                    <p className='text-amber-400 font-bold'>$ {item.price.toFixed(2)}</p>
                                    <button className='bg-amber-500 text-white py-2 rounded-md mt-4 hover:bg-amber-600 transition-all'>
                                        Add to Cart
                                    </button>
                                                         </div>
                                                  </SwiperSlide>
                                            ))}
                    </Swiper>
                                    
                                 
                               
                                    
                           </div>
                    </div>
               </div>
            </div>
        </div>
       
    )
}
function Beffotter(){
    return(
        <>
          <h1 className='text-white uppercase ml-10 text-2xl font-[600] '>categories</h1>
        <div className='grid grid-cols-12 ml-10 mt-2'>
           
              
                    {Objet2.map((item)=>{
                        return(
                     <div key={item.id} className='bg-white/5 backdrop-blur-md rounded-[10px] mr-4'>
                         <img src={item.img} alt="" className='w-50 rounded-[5px]' />
                        <p className='text-white text-center'>{item.descption}</p>
                    </div>
                        )
                    })}
             
              <div className='grid-cols-8 w-screen relative '>
                  <div className='bg-white/5 backdrop-blur-md h-[100%] w-[30%] absolute right-1/2 rounded-2xl'>
                    <img src={IMgAds} alt="" className='rounded-2xl absolute z-1'/>
                      <div  className='text-white absolute z-2 uppercase mt-2 ml-5'>
                        <h1 className='text-[23px] leading-[26px] font-[600]'>top-rated </h1>
                         <h1 className='text-[25px] font-[600]'>component deals</h1>
                        <p >nvidia rtx 4080 comanet</p>
                        <button className='bg-blue-600 p-[5px] px-[30px] mt-[4px] rounded-[10px] hover:cursor-pointer hover:bg-blue-700'>learn now</button>
                      </div>
                     
                  </div>
              </div>
        </div> 
        </> 
            )  
 } 
 function Foter(){
     const socialMedia = [
    { name: 'Facebook', icon: faFacebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: faInstagram, color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: faTwitter, color: 'hover:text-blue-400' },
  ];
   const cards=[{id:"1",img:'https://oxshare.com/wp-content/uploads/2021/05/visa-logo-png-transparent.png'},
                {id:"2",img:'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png'},
                {id:"3",img:'https://tse2.mm.bing.net/th/id/OIP.jSYQDnQnweCFDAkKmhK74wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'},
               
   ]
    return(
    <div >
        <div className='grid grid-cols-6 ml-10 mt-20 h-70 '>
          <div>
            <img src={Imga} alt="" className='w-50 justify-self-center mt-5'/>
             <div>
                <p className='text-white text-center mt-2'>
                    cyberbyte .custom-built and pre-configuration
                     pereonal'd personal pemigunai 
                </p>
             </div>
          </div>
          <div className='  text-white capitalize '>
              <div className='relative left-1/3'>
                <h1 className='font-[500]  text-[19px] mt-7'>company</h1>
               <ul className='mt-2'>
                <li>Home</li>
                <li>about us</li>
                <li>cuxtoners</li>
                <li>press</li>
               </ul>
              </div>
               
          </div>
           <div className='  text-white capitalize '>
              <div className='relative left-1/3'>
                <h1 className='font-[500]  text-[19px] mt-7'>Support</h1>
               <ul className='mt-2'>
                <li>Contact Us</li>
                <li>Components</li>
                <li>Laptops</li>
                <li>Policy</li>
               </ul>
              </div>
               
          </div>
           <div className='  text-white capitalize '>
              <div className='relative left-1/3'>
                <h1 className='font-[500]  text-[19px] mt-7'>My Account</h1>
               <ul className='mt-2'>
                <li>My Account</li>
                <li>Resources</li>
                <li>Gear</li>
                <li>Contact Us</li>
               </ul>
              </div>
               
          </div>
          <div className='relative left-1/3'>
            <nav className='text-white capitalize'>
             <h1 className='font-[500]  text-[19px] mt-7'>Social media</h1>
             {socialMedia.map((item,index)=>{
                 return(
                    <li key={item.index} className={ `list-none leading-10 ${item.color} hover:cursor-pointer`}><FontAwesomeIcon icon={item.icon} className="text-xl" />   <span className=' relative mb-4'>{item.name}</span></li>
                 )
             })}
             </nav>
          </div>
          <div className='text-white capitalize'>
             <nav  className='relative left-1/7'>
                <h1 className='font-[500]  text-[19px] mt-7'>payment methode</h1>
                <div className='grid grid-cols-4'>
                    {cards.map((item)=>{
                        return(
                           <img key={item.id} src={item.img} alt="" className='w-10 mt-4' />
                        )
                    })}
                </div>
             </nav>
          </div>
        </div>
    </div>
    )
 }
function CopieRhit(){
    return(
        <div className='h-20 mt-5 ml-5 relative text-white'>
            <p className='text-white'>&copy; 2026 <span className='font-[500]'>Cyberbyte </span>style reverced</p>
             <div className='absolute right-15 top-0.5'>
                <p>HASSAN ES-SEBAIY</p>
                <p className='uppercase'>choaib bouaaliouat</p>
                <p>MOHAMED NAIT BIHI</p>
             </div>
        </div>
    )
}
       