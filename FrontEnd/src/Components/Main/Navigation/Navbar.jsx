import logo from "../../../assets/MainLogo/main_logo.png";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ExploreDropdown from "./DropdownMenu/ExploreDropdown";
import AccountDropdown from "./DropdownMenu/AccountDropdown";
import SideNavBar from "./SideNavBar";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[4rem] flex flex-row justify-between items-center font-manrope px-12 mb-1 sm:hidden">
        <div className="flex items-center gap-7 flex-1">
          <Link>Home</Link>
          <ExploreDropdown />
          <Link>Agencies</Link>
          <Link>About Us</Link>
        </div>
        <button className="size-[4rem]">
          <img src={logo} />
        </button>
        <div className="flex flex-row items-center flex-1 justify-end gap-3">
          <button>
            <MagnifyingGlassIcon className="size-5" />
          </button>
          <div className="h-[1.8rem] w-px bg-black/30"></div>
          <Link>Sell</Link>
          <div className="h-[1.8rem] w-px bg-black/30"></div>
          <AccountDropdown />
        </div>
      </div>
      <div className="hidden sm:flex">
        <SideNavBar />
      </div>
    </>
  );
}
