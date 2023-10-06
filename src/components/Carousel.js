import { useRef } from "react";


const Carousel = () => {
  

  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2568f3f6928c7615151b9df37ed6f8b8",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1095c62afafd16a1e99289880fddfc5b",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/afb1b49f7fcb84d2b3a73a1139f33299",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1e3e7c66f97538f591be562b75297a8d",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/870fc64dc5157fb9b691934d2406ec8f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
    
  ];


  const boxRef = useRef(null);

  const nextImage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }
  };

  const prevImage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }
  };

    // let box = document.querySelector('.imagecontainer');
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []); // <-- Empty dependency array

  // const nextImage = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft-width;
  //   console.log(width);
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  
  // };
  // const prevImage = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  //   console.log(width); 
  // }
  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  return (
    <div className="bg-slate-400 h-[315px] shadow-lg overflow-hidden">
      <div>
        <button onClick={prevImage} className="left-0 p-3 absolute mt-32 border border-white">
          <p className="text-[39px] text-white">&lt;</p>
        </button>
        <button onClick={nextImage} className="border border-white p-3 absolute right-0 mt-32">
          <p className="text-[39px] text-white">&gt;</p>
        </button>
      </div>
      <div id="imagecontainer" className="h-[80%] w-[85%]">
        <div  className="flex w-1/3">
          {images.map((image, index) => (
            <img key={index} className="my-8 ml-[57px]" src={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// const Carousel = () => {const images = [
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2568f3f6928c7615151b9df37ed6f8b8",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1095c62afafd16a1e99289880fddfc5b",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/afb1b49f7fcb84d2b3a73a1139f33299",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1e3e7c66f97538f591be562b75297a8d",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/870fc64dc5157fb9b691934d2406ec8f",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
    
  // ];
 
//   const [currentIndex, setCurrentIndex] = useState(0);

  // 
 
//   useEffect (() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); 

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

  
//   return <div className="bg-blue-800 h-[315px] shadow-2xl overflow-hidden ">
//  <div className="">   <button onClick={prevImage} className="left-0 p-3  absolute mt-32 border border-white "><p className=" text-[39px]">&lt;</p></button>
//     <button onClick={nextImage} className="border border-white p-3 absolute right-0 mt-32 "><p className=" text-[39px]">&gt;</p></button> </div>
//    <div className=" h-[80%] w-[85%]  "> <div className="flex w-1/3  ">
//       {images.map((image , index)=>(
//         <img key={index} className="my-8 ml-[57px] "
//         src={image}/>
//       ))}
//     </div> </div>
//   </div>
    
// }  

// export default Carousel;