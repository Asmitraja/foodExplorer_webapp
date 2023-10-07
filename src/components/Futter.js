import { FaInstagram ,FaLinkedinIn,FaGithub,FaFacebook,FaTwitter,FaPhone} from "react-icons/fa6";
import { Link } from "react-router-dom";


const Futter = ()=>{
    return <div className="text-white bg-gray-800">
     <div className="footer grid grid-flow-col p-10 w-[90%] m-auto">
            <div>
             <h1 className="text-lg text-yellow-600 "> FOOD ExPLORER</h1>   
          <Link to="http://bietjhs.ac.in/"  target="_blank">  <h1 className="text-blue-200 hover:scale-95"> @biet_ jhansi </h1> </Link>
            <p> Order Food </p>
            <p>Eat </p>
            <p>Code</p>
            <p>Sleep</p>
            <p>Repeat</p>
            </div>
            <div className="col-span-2 ml-6">
                <h1 className="text-lg text-cyan-200"> Subscribe to get more updates :</h1>
                <form>
                <input className="p-2 w-[78%] rounded-lg text-black" type="email" placeholder="enter email for our newsletter" required></input>
                <button type="submit" className=" border-2 p-1 px-2 m-2 rounded-lg hover:scale-90" > Subscribe</button> </form>
                <p > Let us savor the nourishment of life first 😋, Why waiting ? Order Now 😍  </p>
            </div>
            <div className="socialink mr-2 ">
                <h1 className="ml-4 text-lg text-cyan-200"> Follow Me on : </h1>
               <div className="linkcontainer flex p-2"> 
                <Link to="https://github.com/Asmitraja"  className="m-2 hover:scale-125" target="_blank"> <h1 className=" text-2xl  "> <FaGithub/> </h1> </Link>
                <Link to="https://www.linkedin.com/in/asmit-dixit-7701b1224" className="m-2 hover:scale-125" target="_blank"> <h1 className=" text-2xl  "><FaLinkedinIn/></h1> </Link>
                <Link to="https://www.instagram.com/rajadixit_2123/" className="m-2 hover:scale-125" target="_blank"> <h1 className="  text-2xl ">  <FaInstagram /> </h1> </Link>
                <Link to="" target="_blank" className="m-2  hover:scale-125"> <h1 className="  text-2xl ">  <FaFacebook /> </h1> </Link>
                <Link to="" target="_blank" className="m-2  hover:scale-125"> <h1 className="  text-2xl ">  < FaTwitter/> </h1> </Link>
                 </div>
             </div>
             <div className="contact">
                    <h1 className="text-lg text-cyan-200">Contact Us :</h1>
                    <div className="flex items-center " ><h1 className=""><FaPhone/></h1><h1 className=""> +91-6396814534</h1> </div> 
                    <h1>Help & Support</h1>
                    <h1>Partner with Us</h1>
                 </div>
                 
         </div>
         <hr/>
         <div className="footerBottom w-[50%]  m-auto p-4">

                 
                    <div className="grid grid-flow-col">
                        <p> {`©`} {new Date().getFullYear()} CopyRight : <span className="text-yellow-600">ASMIT DIXIT</span> <br/> All Rights Reserved</p>
                    
 
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>

                    </div>

                 </div>
         
    </div>
}
export default Futter;