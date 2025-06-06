"use client";
import Navbar from "@/components/Navbar";
import background from "@/assets/bg-destination.jpg";
import { datas } from "@/data/destination";
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
        <p className="uppercase sm:text-left text-center text-xl sm:text-3xl font-barlow-condensed tracking-widest mb-32">
          <span className="text-white/25">01</span> Pick your destination
        </p>
        <div className="flex flex-col lg:flex-row gap-28 text-center lg:text-left">
          <div className="size-56 sm:size-100 lg:size-120 flex-1 flex justify-center lg:justify-end mx-auto">
            <Image {...data.img} alt={data.name} className="object-contain" />
          </div>
          <div className="flex-1 mx-auto">
            <ul className="flex gap-8 font-barlow-condensed tracking-widest w-fit mx-auto lg:mx-0">
              {datas.map((data, i) => (
                <li
                  key={i}
                  className={twMerge(
                    "uppercase relative cursor-pointer group",
                    i != selection && "text-blue-300",
                  )}
                  onClick={() => setSelection(i)}
                >
                  {data.name}
                  {i == selection ? (
                    <div className="absolute bg-white h-1 inset-x-0 -bottom-3" />
                  ) : (
                    <div className="absolute transition-colors duration-300 group-hover:bg-blue-300/50 h-1 inset-x-0 -bottom-3" />
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10 max-w-[45ch]">
              <h1 className="uppercase font-bellefair text-6xl sm:text-8xl mb-4">
                {data.name}
              </h1>
              <p className="text-blue-300 sm:text-lg leading-relaxed">
                {data.desc}
              </p>
              <hr className="my-10 border-white/25" />
              <div className="uppercase flex sm:flex-row flex-col gap-6 justify-between">
                <div className="flex-1 space-y-3">
                  <p className="font-barlow-condensed tracking-widest text-sm text-blue-300">
                    Avg. Distance
                  </p>
                  <p className="font-bellefair text-3xl">
                    {data.distance.value} {data.distance.unit}
                  </p>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="font-barlow-condensed tracking-widest text-sm text-blue-300">
                    Est. Travel Time
                  </p>
                  <p className="font-bellefair text-3xl">
                    {data.time.value} {data.time.unit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
