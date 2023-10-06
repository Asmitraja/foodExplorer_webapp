import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Futter from "./Futter";

export const ContactUs = ()=>{

    const[submitForm , setSubmitForm] = useState(false);
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8hg2num', 'template_zez71cr', form.current, 'EMy_jDsr7kIO2Mtgl')
          .then((result) => {
             setSubmitForm(true);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         
      };
         
    //   if(submitForm === false){
    //     return <div>
    //         <h1>Your Feedback is Valuable for us ! Thanks for Contacting Us</h1>
    //     </div>
    //   }

    
    return( <div>
        <section className=" grid grid-flow-col grid-cols-3">
            <div className=" ">
                <img  className="mt-36 ml-14  h-[370px] rounded-lg" src="https://st2.depositphotos.com/3591429/5247/i/450/depositphotos_52470369-stock-illustration-people-holding-words-contact-us.jpg"/>
            </div>
             

            <div className=" w-[80%] m-auto p-9 grid col-span-3 ">
                <h1 className="text-5xl  font-bold font-serif text-center"> Contact <span className="text-6xl text-blue-500">Us</span> </h1>

                { submitForm ? <h1 className="text-3xl font-medium p-32 shadow-md mb-7 text-green-500">Thanks for Your Valuable Feedback! </h1> : 

                <form ref={form} onSubmit={sendEmail}
                 className="flex flex-col shadow-2xl mt-3 rounded-lg  ">
                    <input className="p-3 m-3 rounded-lg shadow-md"  type="text" placeholder="Full Name" name="user_name"required></input>
                    <input className="p-3 m-3 rounded-lg shadow-md" type="email" placeholder="email address" name="user_email"required></input>
                    <input className="p-3 m-3  rounded-lg shadow-md" type="text" placeholder="Subject" name="subject" required></input>
                    <textarea className="p-3 m-3  rounded-lg shadow-md" name="message" cols={25} rows={7} placeholder="Your Concern" required></textarea>
                    <button  
                
                    className="border-2 bg-blue-500 p-1 px-2 m-2 ml-3 rounded-lg w-4/12 hover:scale-90" type="submit"> Send Message</button>
                    
                </form> }


            </div> 
               
        
        </section>
        <Futter/> </div>
    );
};
export default ContactUs;