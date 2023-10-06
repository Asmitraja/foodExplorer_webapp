import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = ()=>{

  const {loggedInUser}= useContext(UserContext);
    return(
       <div>
        <h1>User : {loggedInUser}</h1>
         {/* <h1>This is a about page</h1> */}
        {/* <h2> i want to tell you that this is my food application page</h2> */}
        {/* <User name={"Asmit Dixit Raja (functional)"} /> */}
        <UserClass name={"Asmit Dixit Raja (Class based)"} location={"Jhansi Class"}/>
       </div>
    );
};

export default About;