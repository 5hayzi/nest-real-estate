import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function AccountDropdown() {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-1 font-semibold rounded-md border border-blue text-blue p-1">
        Login
        <ChevronDownIcon className="size-4 fill-blue" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="font-manrope w-44 origin-top-right bg-[#ffffff] rounded-md border [--anchor-gap:1rem] border-black/20 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black justify-between">
            Login
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/enter-2.png"
              alt="enter-2"
            />
          </Link>
        </MenuItem>

        <div className="my-1 w-[80%] h-px bg-black/20 mx-auto" />
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black justify-between">
            Sign Up
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-user-medical-kiranshastry-lineal-kiranshastry.png"
              alt="external-user-medical-kiranshastry-lineal-kiranshastry"
            />
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
