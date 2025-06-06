import { StaticImageData } from "next/image";
import douglas from "@/assets/crew/douglas.png";
import mark from "@/assets/crew/mark.png";
import victor from "@/assets/crew/victor.png";

interface structure {
  img: StaticImageData;
  name: string;
  role: string;
  desc: string;
}

export const datas: Array<structure> = [
  {
    img: douglas,
    name: "Douglas Hurley",
    role: "Commander",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    img: mark,
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    img: victor,
    name: "Victor Glover",
    role: "Pilot",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
];
