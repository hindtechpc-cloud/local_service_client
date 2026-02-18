import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpeg";

export function SidebarSection({ isSidebar, setIsSidebar,className }) {

  return (
    <div className="relative">
      {/* {isSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebar(false)}
        />
      )} */}
      <div
        className={className}>
        {isSidebar && (
          <button
            onClick={() => setIsSidebar(!isSidebar)}
            className="absolute -right-5 top-2 cursor-pointer sm:p-3 p-4 bg-gray-200 text-red-500 hover:bg-gray-100 hover:font-bold  rounded-full "
          >
            <RxCross2 size={25} />
          </button>
        )}
        <div className={""}>
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
            <img
              src={logo}
              alt="Daily local services"
              className="w-full h-full object-cover"
            />
          </div>
          <NavigationMenu className={"  "}>
            <NavigationMenuList
              className={
                "flex flex-col items-center justify-center text-start w-44 mt-2"
              }
            >
              {/* home  */}
              <NavigationMenuLink asChild className={"w-44"}>
                <Link
                  className="focus:text-red-500 focus:underline no-underline w-44"
                  to="/"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              {/* explore  */}
              <NavigationMenuLink asChild className={"w-44"}>
                <Link
                  className="focus:text-red-500 focus:underline no-underline"
                  to="/explore"
                >
                  Explore
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className={"w-44"}>
                <Link
                  className="focus:text-red-500 focus:underline no-underline"
                  to="/my-bookings"
                >
                  Booking
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className={"w-44"}>
                <Link
                  className="focus:text-red-500 focus:underline no-underline"
                  to="/profile"
                >
                  Profile
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link
          className="w-44 hover:bg-gray-100 py-2 text-center rounded focus:text-red-500 focus:underline no-underline"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
