"use client";
import Navbar from "@/components/Navbar";
import background from "@/assets/bg-crew.jpg";
import { datas } from "@/data/crew";
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
          <span className="text-white/25">02</span> Meet your crew
        </p>
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 text-center lg:text-left">
          <div className="h-85 sm:h-140 lg:h-170 flex justify-center lg:justify-start mx-auto">
            <Image {...data.img} alt={data.name} className="object-contain" />
          </div>
          <div className="mx-auto flex flex-col gap-6 justify-between">
            <div />
            <div className="max-w-[60ch]">
              <p className="uppercase text-lg sm:text-3xl text-white/50">
                {data.role}
              </p>
              <h1 className="uppercase font-bellefair text-2xl sm:text-6xl my-4">
                {data.name}
              </h1>
              <p className="text-blue-300 sm:text-lg leading-relaxed">
                {data.desc}
              </p>
            </div>
            <ul className="flex gap-4 lg:gap-10 font-barlow-condensed tracking-widest w-fit mx-auto lg:mx-0">
              {datas.map((_, i) => (
                <li
                  key={i}
                  className={twMerge(
                    "uppercase cursor-pointer size-2.5 lg:size-4 rounded-full",
                    i == selection ? "bg-white" : "bg-white/15",
                  )}
                  onClick={() => setSelection(i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </body>
  );
}
