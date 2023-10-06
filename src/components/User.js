import { useState } from "react";

const User = ({name})=>{
    const [count]= useState(0);
    const [count2]= useState(2);
  
    return (
        
        <div className="usercard">
            <h2>Count:{count}</h2>
            <h2>Count:{count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Jhansi</h3>
            <h4>Contact:dixitraja026@gmail.com</h4>
        </div>
    );
};
export default User;