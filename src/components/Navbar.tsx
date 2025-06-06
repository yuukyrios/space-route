"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const menus: Array<string> = ["home", "destination", "crew", "technology"];
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="font-barlow-condensed fixed top-0 inset-x-0 flex justify-between items-center container mx-auto py-6 xl:py-16 px-6 lg:pl-5 lg:pr-0 z-50">
        <Link href="/">
          <Image
            src={logo}
            width={48}
            height={48}
            className="object-cover size-12"
            alt="Logo"
            priority
          />
        </Link>
        <ul className="text-white tracking-widest bg-white/5 backdrop-blur-3xl hidden lg:flex gap-12 pl-40 pr-16 relative">
          <div className="hidden xl:block h-px bg-white/25 w-8/12 absolute inset-y-1/2 right-11/12" />
          {menus.map((menu, i) => (
            <li key={i} className="py-10 relative group">
              <Link href={menu == "home" ? "/" : menu}>
                <span className="font-bold">0{i} </span>
                {menu.toUpperCase()}
              </Link>
              {pathname.slice(1) == menu ||
              (pathname == "/" && menu == "home") ? (
                <div className="absolute inset-x-0 h-1 bg-white bottom-0" />
              ) : (
                <div className="absolute inset-x-0 h-1 transition-colors duration-300 group-hover:bg-white/50 bottom-0" />
              )}
            </li>
          ))}
        </ul>
        <button
          className="size-8 flex flex-col justify-center gap-1.5 cursor-pointer lg:hidden relative"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={twMerge(
              "h-1 w-8 rounded-md bg-white transition-transform",
              navOpen && "rotate-45 translate-y-2/1",
            )}
          />
          <div
            className={navOpen ? "opacity-0" : "h-1 w-8 rounded-md bg-white"}
          />
          <div
            className={twMerge(
              "h-1 w-8 rounded-md bg-white transition-transform",
              navOpen && "-rotate-45 w-8 -translate-y-2/1",
            )}
          />
        </button>
      </nav>
      <ul
        className={twMerge(
          "text-white tracking-widest text-lg flex flex-col gap-8 lg:hidden fixed top-0 right-0 inset-y-0 min-w-64 w-1/2 transition-transform duration-300 pl-8 pt-36 bg-white/5 backdrop-blur-3xl z-49",
          !navOpen && "translate-x-full",
        )}
      >
        {menus.map((menu, i) => (
          <li key={i} className="relative">
            <Link href={menu == "home" ? "/" : menu}>
              <span className="font-bold">0{i} </span>
              {menu.toUpperCase()}
            </Link>
            {(pathname.slice(1) == menu ||
              (pathname == "/" && menu == "home")) && (
              <div className="absolute inset-y-0 w-1 bg-white right-0" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
