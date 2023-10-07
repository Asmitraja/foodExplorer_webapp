import { useContext, useState } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import AnimationText from "./AnimationText";
import Futter from "./Futter";
import Slider from "./Slider";

const About = ()=>{

  const {loggedInUser}= useContext(UserContext);
  const [isopen , setisopen ] = useState(false);
    return( <div>
       <div className="grid grid-flow-col w-[70%] mx-auto gap-20">
        {/* <h1>User : {loggedInUser}</h1> */}
         {/* <h1>This is a about page</h1> */}
        {/* <h2> i want to tell you that this is my food application page</h2> */}
        {/* <User name={"Asmit Dixit Raja (functional)"} /> */}
      <div>  <UserClass/> </div>
        <div>
          <p className=" text-8xl mt-8   ">About <span className="text-blue-500">uS</span> </p>
          <hr className="w-[60%]"/>
         <div className="flex my-5 "> <div><button className="mx-2 p-2 px-4 rounded-md bg-gray-100">About </button> </div>
        <div className="relative flex flex-col items-center">  <button className="mx-2 px-4 rounded-md  bg-gray-100 py-1" onClick={()=> setisopen((prev) => !prev)}> <span className="flex"> <span className="p-1" > Skills</span> 
        { isopen ? (<h1 className="text-2xl invert"> 🔺</h1>) : (<h1 className="text-2xl ">🔻</h1>)} </span>
    { isopen ? (

<div  className="  rounded-md bg-blue-200">
    <ul >
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DSA - Intermediate</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Full Stack Developer</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MERN Stack</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">C++</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Java</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UI /UX designer</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Content Writer</a>
      </li>
    </ul>
</div> ) : <span></span> } </button>
</div>

        <div> <button className="mx-2 px-4 rounded-md bg-gray-100 p-2 ">Experience</button> </div>  </div> 
          <AnimationText/>
          <p className="mt-2 text-lg font-">

"Welcome to our world of web development! We are a passionate team of developers dedicated to crafting exceptional online experiences. With a blend of creativity and technical expertise, we bring your ideas to life. Our mission is to deliver user-friendly, innovative websites that leave a lasting impression. From custom solutions to responsive designs, we're here to elevate your online presence. Let's build something amazing together!" </p>
      
        </div>
       </div>
      
      <div className="mt-24"> <Futter/> </div>
       </div>
    );
};

export default About;