"use client";
import Navbar from "@/components/Navbar";
import background from "@/assets/bg-technology.jpg";
import { datas } from "@/data/technology";
import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Destination() {
  const [selection, setSelection] = useState<number>(0);
  const data = datas[selection];
  return (
    <body style={{ backgroundImage: `url(${background.src})` }}>
      <Navbar />
      <main className="text-white container mx-auto mt-48 mb-24 lg:mt-60 px-5">
        <p className="uppercase sm:text-left text-center text-xl sm:text-3xl font-barlow-condensed tracking-widest mb-6">
          <span className="text-white/25">03</span> Space Launch 101
        </p>
        <div className="flex flex-col xl:flex-row-reverse items-center gap-8 text-center lg:text-left">
          <div className="w-full h-64 xl:size-150 flex justify-center lg:justify-start mx-auto">
            <Image {...data.img} alt={data.name} className="object-cover" />
          </div>
          <div className="mt-10 mx-auto flex flex-col gap-6 justify-between order-2 xl:order-none">
            <div className="max-w-[60ch]">
              <p className="uppercase text-lg sm:text-3xl text-white/50">
                The terminology...
              </p>
              <h1 className="uppercase font-bellefair text-2xl sm:text-6xl my-4">
                {data.name}
              </h1>
              <p className="text-blue-300 sm:text-lg leading-relaxed">
                {data.desc}
              </p>
            </div>
          </div>
          <ul className="flex xl:flex-col gap-4 lg:gap-10 font-bellefair tracking-widest w-fit mx-auto lg:mx-0 order-1">
            {datas.map((_, i) => (
              <li
                key={i}
                className={twMerge(
                  "uppercase cursor-pointer size-10 md:size-14 xl:size-20 rounded-full flex justify-center items-center text-lg md:text-xl xl:text-3xl outline outline-white/25 order-1 xl:order-none",
                  i == selection && "bg-white text-black",
                )}
                onClick={() => setSelection(i)}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </body>
  );
}