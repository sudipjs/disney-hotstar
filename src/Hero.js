import React from 'react'
import { Link} from "react-router-dom"

const Hero = () => {
    return (
    //     <section className=" lg:py-2  lg:border-b-8 border-white border-opacity-10  ">
    //         <div className="  flex flex-col items-center py-10 px-10 space-y-3 lg:space-y-4  " >
        
    //                 <div className=" lg:hidden">
    //                     <img src="./images/logo.svg" className=" object-contain h-24 w-52" alt="" />
    //                 </div>
    //                 <div className=" hidden lg:inline-block">
    //                     <img src="./images/cta-logo-one.svg" className=" object-contain h-36 w-full" alt="" />
    //                 </div>
    //                 <h1 className=" text-xl font-bold text-center  leading-6 lg:text-5xl lg:max-w-2xl ">The best stories in the world, all in one place.</h1>
    //                 <p className=" font-normal text-center lg:text-3xl  lg:max-w-xl lg:font-medium lg:tracking-wider">Watch anywhere. Cancel anytime.</p>
    //                 <p className=" font-normal text-center lg:font-normal lg:text-3xl lg:max-w-xl lg:tracking-wider  ">Start Streaming Now</p>
    //                 <Link to="/login">
    //                 <button className=" uppercase bg-subscribe_btn py-2 px-12 cursor-pointer rounded font-semibold text-lg tracking-wider lg:px-48 lg:py-2 lg:text-4xl lg:font-bold ">get started</button>
    //                 </Link>
    //                 <div className=" pt-4 ">
    //                     <img src="./images/cta-logo-two.png" className=" object-contain" alt="" />
    //                 </div>
    //            </div>
               
              

          
    //    </section>
    <section className=" lg:relative ">

       <img 
        src="../../../images/landing-background.jpg" 
        alt="" 
        className=" h-96 lg:w-screen lg:h-h4 lg:border-b-8 lg:border-t-0 border-white border-opacity-10 "/>
   
        <div className=" lg:absolute lg:top-96 lg:left-52 -mt-96 flex flex-col items-center py-10 px-10 space-y-3 lg:space-y-4  " >

                <div className=" lg:hidden">
                   <img src="./images/logo.svg" className=" object-contain h-24 w-52" alt="" />
                </div>

                <div className=" hidden lg:inline-block">
                         <img src="./images/cta-logo-one.svg" className=" object-contain h-36 w-full" alt="" />
                </div>

                <h1 className=" text-xl font-bold text-center  leading-6 lg:text-5xl lg:max-w-2xl ">The best stories in the world, all in one place.</h1>

                <p className=" font-normal text-center lg:text-3xl  lg:max-w-xl lg:font-medium lg:tracking-wider">Watch anywhere. Cancel anytime.</p>

                <p className=" font-normal text-center lg:font-normal lg:text-3xl lg:max-w-xl lg:tracking-wider  ">Start Streaming Now</p>

                <Link to="/login">
                     <button className=" uppercase bg-subscribe_btn py-2 px-12 cursor-pointer rounded font-semibold text-lg tracking-wider lg:px-48 lg:py-2 lg:text-4xl lg:font-bold ">get started</button>
                </Link>

                <div className=" pt-4 ">
                       <img src="./images/cta-logo-two.png" className=" object-contain" alt="" />
              </div>
        </div>

    </section>
    )
}

export default Hero


//section
//py-4 px-2 lg:bg-subscribe_btn lg:pt-2 lg:pl-2 lg:pb-1 lg:pr-1