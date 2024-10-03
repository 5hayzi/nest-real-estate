import Navbar from "../Navigation/Navbar";

export default function Homepage() {
  return (
    <div className="w-screen h-screen flex flex-col font-manrope items-center">
      <Navbar />
      <div className="w-[95%] h-[calc(100vh-15%)] flex bg-gradient-to-br from-[#1C3A76] to-[#1F6CB4] relative rounded-2xl justify-center p-3">
        <div className="w-[9rem] h-[9rem] rounded-lg drop-shadow-lg bg-white absolute -z-[1]">
          {/* <img src={image} /> */}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-9xl text-white">nest</span>
          <span className="text-3xl text-white text-center">
            Looking to <span className="text-black">buy</span> the best{" "}
            <span className="text-black">condo</span>?<br /> We got you covered!
          </span>
        </div>
      </div>
    </div>
  );
}
