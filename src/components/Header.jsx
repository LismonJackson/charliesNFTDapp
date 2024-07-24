import React from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/Logo/logo.PNG";
import ConnectWallet from "./ConnectWallet";
import { useWeb3Modal } from "@web3modal/ethers/react";

import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

const menuItems = [
  {
    name: "HOME",
    href: "#welcome",
  },
  {
    name: "SPECS",
    href: "#specs",
  },
  {
    name: "WELCOME ",
    href: "#community",
  },
  {
    name: "ROADMAP",
    href: "#roadmap",
  },
  {
    name: "TEAM",
    href: "#team",
  },
];

export default function Header() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full  pb-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img width="55" height="55" src={logo} alt="logo" />
          </span>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-3xl text-[#d40303] bold-shadow font-bold "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            className={`rounded-md bg-sky-500 px-3 py-2 text-2xl font-bold  text-[#fff] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
            onClick={
              isConnected ? () => open("Account") : () => open("Connect`")
            }
          >
            {isConnected
              ? address.slice(0, 6) + "..." + address.slice(-4)
              : "Connect Wallet"}
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img width="50" height="50" src={logo} alt="logo" />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-[#ffffff]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <nav className="text-center grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 text-center flex items-center rounded-md p-3 font-bold"
                      >
                        <span className="ml-3 w-full text-center text-xl font-extrabold text-[#b42525]">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  className="top-[14%] sm:top-[26%] right-[25%] sm:right-[7%] absolute z-20 border-2 border-black font-semibold text-black rounded-lg text-lg py-2 px-4"
                  onClick={
                    isConnected ? () => open("Account") : () => open("Connect`")
                  }
                >
                  {isConnected
                    ? address.slice(0, 6) + "..." + address.slice(-4)
                    : "Connect Wallet"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
