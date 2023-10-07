import Futter from "./Futter";

const Grocery = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-2 mt-6  ">Welcome to Our Grocery Page !</h1>
      <h1 className="text-center" >
       The page is Leveraging cutting-edge lazy
        loading technology in React, we've designed this space for optimal
        performance. <p className="text-center">While it may appear empty now, rest assured that we've
        prioritized speed and efficiency to ensure a seamless browsing
        experience. Soon, you'll find a carefully curated selection of
        high-quality groceries right here. From fresh produce to pantry
        essentials, we're committed to bringing you the best. </p> 
        <p> Keep an eye out
        for exciting updates and new arrivals as we expand our offerings. In the
        meantime, feel free to explore the rest of our website for other
        fantastic products. </p > <p className="mt-20 text-red-400">Don't forget to subscribe to our newsletter for
        exclusive updates. </p><p className="text-green-400">Thank you for visiting, and we're excited to provide
        you with a top-tier grocery shopping experience! </p>
      </h1>
    <div className="mt-80">  <Futter/> </div>
    </div>
  );
};
export default Grocery;
