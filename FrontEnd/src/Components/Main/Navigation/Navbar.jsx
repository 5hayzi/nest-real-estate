import logo from "../../../assets/MainLogo/main_logo.png";
import { Link } from "react-router-dom";
import {ChevronDownIcon} from "@heroicons/react/24/outline";


export default function Navbar() {
  return (
    <div className="w-full h-[5rem] flex flex-row justify-evenly items-center font-manrope">
      <div className="flex items-center gap-7">
        <Link>Home</Link>

        <button className="flex items-center gap-1">Explore <ChevronDownIcon className="size-3"/> </button>

        <Link>Agencies</Link>
        <Link>About Us</Link>
      </div>
      <button className="size-[4rem]">
        <img src={logo} />
      </button>
      <div className="flex items-center">
        <button></button>
      </div>
    </div>
  );
}
