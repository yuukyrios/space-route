import { StaticImageData } from "next/image";
import moon from "@/assets/destination/moon.png";
import mars from "@/assets/destination/mars.png";
import europa from "@/assets/destination/europa.png";
import titan from "@/assets/destination/titan.png";

interface structure {
  img: StaticImageData;
  name: string;
  desc: string;
  distance: {
    value: number;
    unit: string;
  };
  time: {
    value: number;
    unit: string;
  };
}

export const datas: Array<structure> = [
  {
    img: moon,
    name: "Moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: {
      value: 384400,
      unit: "km",
    },
    time: {
      value: 3,
      unit: "days",
    },
  },
  {
    img: mars,
    name: "Mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: {
      value: 225,
      unit: "mil. km",
    },
    time: {
      value: 9,
      unit: "months",
    },
  },
  {
    img: europa,
    name: "Europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: {
      value: 628,
      unit: "mil. km",
    },
    time: {
      value: 3,
      unit: "years",
    },
  },
  {
    img: titan,
    name: "Titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: {
      value: 1.6,
      unit: "bil. km",
    },
    time: {
      value: 7,
      unit: "years",
    },
  },
];
