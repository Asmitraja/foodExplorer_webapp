import React from "react";
import UserContext from "../utils/UserContext";


class UserClass extends React.Component{
    constructor(props){
        super(props);  
        // console.log(props);
        // this.state = {
        //     count:0,
        //     count2:2,
        // }
        this.state={
            UserInfo:{
                name :"Dummy" ,
                location:"default",
                avatar : "https/yeyee.com"
            },
        }
    };

    async componentDidMount(){
         
        const data= await fetch("https://api.github.com/users/Asmitraja");
        const json =  await data.json();

        this.setState({
            UserInfo:json,
        });
        // console.log(json);
    }
    
    
    render(){
        // const {name , location }= this.props;
        // const {count, count2} = this.state;
        const { name , location , avatar_url } = this.state.UserInfo;
        return(
            <div className="usercard ">
            {/* <h2>Count : {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count +1 ,
                });
            }}>Increase count</button>
            <h2>Count : {count2}</h2> */}
            <img className="opacity-90 h-96 fill-pink-300 rounded-t-3xl mt-32 
              " src={avatar_url} ></img>
            {/* <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:dixitraja026@gmail.com</h4> */}
             <div className="hidden"> 
                LoggedIn User :
                <UserContext.Consumer>
                { ({loggedInUser})=> <span className="font-semibold ">{loggedInUser}</span> }
                </UserContext.Consumer>
                </div>

        </div>
        )
    };
};

export default UserClass;