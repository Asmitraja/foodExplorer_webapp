import user_icon from "../utils/person.png";
import email_icon from "../utils/email.png";
import password_icon from "../utils/password.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [action, setAction] = useState("SignUp");
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginmessage, setloginmessage] = useState(false);

  const handleSignUp = (e) => {
    if (username && useremail && userpassword) {
      setSuccessMessage("Successfully signed up!");
      setUsername("");
      setUseremail("");
      setUserpassword("");
    }
  };
  const handleLogIn = () => {
    if (useremail && userpassword) {
      setloginmessage(true);
    }
  };
  return (
    <div>
      {" "}
      {loginmessage === false ? (
        <div className="w-[30%] h-[400px] m-auto mt-9 shadow-lg ">
          <img
            className="w-16 m-auto h-16 mt-12 "
            src="https://yt3.googleusercontent.com/w-cAg_OgVCRpe3XjySTHVPBLmHmV4_k4eSt49WULAoIt1ZoeP-ogmSrpRIjh749RN4J5SodbH1s=s900-c-k-c0x00ffffff-no-rj"
          />
          <div className="flex flex-col ">
            <h1 className="flex justify-center text-xl font-semibold text-purple-900 underline underline-offset-auto">
              {" "}
              {action}
            </h1>
            <form className="flex flex-col mt-4">
              {action === "LogIn" ? (
                <div></div>
              ) : (
                <div className="flex justify-center mt-2 ">
                  {" "}
                  <img
                    className="mr-3 w-6 h-7 my-auto"
                    src={user_icon}
                  ></img>{" "}
                  <input
                    className=" w-[350px] bg-slate-100 p-3 rounded-sm shadow-md"
                    type="text"
                    name="User_name"
                    placeholder="User_name"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />{" "}
                </div>
              )}
              <div className="flex justify-center mt-3">
                {" "}
                <img className="mr-3 w-7 h-6 my-auto" src={email_icon} />{" "}
                <input
                  className="w-[350px] bg-slate-100 p-3 rounded-sm shadow-md "
                  type="email"
                  name="password"
                  placeholder="User_email"
                  required
                  value={useremail}
                  onChange={(e) => {
                    setUseremail(e.target.value);
                  }}
                />{" "}
              </div>
              <div className="flex justify-center mt-3">
                {" "}
                <img
                  className="mr-3 w-6 h-7 my-auto"
                  src={password_icon}
                />{" "}
                <input
                  className="w-[350px] bg-slate-100 p-3 rounded-sm shadow-md"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={userpassword}
                  onChange={(e) => {
                    setUserpassword(e.target.value);
                  }}
                />{" "}
              </div>
            </form>
            <div className="flex justify-center mt-3 ">
              {" "}
              Forgot password
            <Link to="/contactUs"> <span className="text-purple-800 cursor-pointer ml-2">
                click here!
              </span> </Link> 
            </div>
            <div className="flex justify-evenly">
              {" "}
              <div
                type="submit"
                className={
                  action === "SignUp"
                    ? " bg-blue-600 p-2 px-4 rounded-2xl m-4 cursor-pointer hover:scale-95"
                    : " bg-gray-200 p-2 px-4 rounded-2xl m-4 cursor-pointer hover:scale-95"
                }
                onClick={() => {
                  setAction("SignUp");
                  handleSignUp();
                }}
              >
                {" "}
                SignUp{" "}
              </div>
              <div
                className={
                  action === "LogIn"
                    ? "  bg-blue-600 p-2 px-5 rounded-2xl m-4 cursor-pointer hover:scale-95"
                    : "  bg-gray-200 p-2 px-5 rounded-2xl m-4 cursor-pointer hover:scale-95"
                }
                onClick={() => {
                  setAction("LogIn");
                  handleLogIn();
                }}
              >
                LogIn
              </div>{" "}
            </div>
          </div>
          {successMessage && (
            <div className="text-green-500 p-2 ">{successMessage}</div>
          )}
        </div>
      ) : (
        <div className="text-lg w-[50%] m-auto py-10 shadow-lg mt-14">
          {" "}
         <h1 className="text-center text-green-500"> You have Successfully logged in !</h1>
          <h1 className="text-center text-green-500"> Click on Order Now Button to find a restaurant 😋</h1>
          <Link to="/">
            {" "}
           <div className="flex justify-center mt-4 "> <button className="p-2 px-4 bg-slate-100 rounded-md ">Order Now</button>{" "} </div>
          </Link>{" "}
        </div>
      )}
    </div>
  );
};
export default SignUp;
