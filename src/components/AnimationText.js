import { TypeAnimation } from "react-type-animation"; 

 const AnimationText =()=>{
     return <div className="text-red-400 font-mono">
            <TypeAnimation
        sequence={[
          "I'm a  Developer.",
          1000,
          "I'm a Content Writer.",
          1000,
          "I'm a UI/UX Designer.",
          1000,
          "I'm a Programmer.",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '3em' }}
      />
     </div>
 }
  export default AnimationText;