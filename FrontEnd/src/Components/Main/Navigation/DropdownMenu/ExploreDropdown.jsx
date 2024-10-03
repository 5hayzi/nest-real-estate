import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function ExploreDropdown() {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-1">
        Explore
        <ChevronDownIcon className="size-4 fill-black" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom start"
        className="font-manrope w-52 origin-top-right bg-[#ffffff] rounded-md border [--anchor-gap:1rem] border-black/20 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/50/sell-property.png"
              alt="sell-property"
            />
            For Sale
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/key-exchange.png"
              alt="key-exchange"
            />
            For Rent
          </Link>
        </MenuItem>
        <div className="my-1 w-[80%] h-px bg-black/20 mx-auto" />
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/news.png"
              alt="news"
            />
            Latest News
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 text-black">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/compass--v1.png"
              alt="compass--v1"
            />
            Discover
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
