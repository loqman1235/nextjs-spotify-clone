import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";
import {
  MdPlayArrow,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
} from "react-icons/md";

const Player = () => {
  return (
    <div className="p-2 flex items-center">
      {/* LEFT SECTION (CURRENT PLAYING SONG)*/}
      <div className="hidden md:flex items-center gap-4">
        {/* COVER */}
        <div className="w-14 h-14 overflow-hidden rounded-md bg-white/20">
          <Image
            src="/images/albums/drake-scorpion.jpg"
            alt="God's Plan"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Link href="/" className="hover:underline text-[13px]">
            God&apos;s Plan
          </Link>
          <Link
            href="/"
            className="text-xs text-secondary-text hover:underline"
          >
            Drake
          </Link>
        </div>
        {/* LIKE SONG BUTTON */}
        <button className="text-secondary-text hover:text-primary-text transition duration-300">
          <GoPlusCircle />
        </button>
      </div>
      {/* PLAYER CONTROLS */}
      <div className="flex-1 space-x-5 flex items-center justify-center flex-col w-full gap-3">
        <div className="flex items-center justify-center gap-5 text-2xl w-full">
          <button className="text-secondary-text hover:text-primary-text transition duration-300 hover:scale-105">
            <MdShuffle />
          </button>
          <button className="text-3xl text-secondary-text hover:text-primary-text transition duration-300 hover:scale-105">
            <MdSkipPrevious />
          </button>
          <button className="p-1 bg-white text-black flex items-center justify-center rounded-full hover:scale-105">
            <MdPlayArrow />
          </button>
          <button className="text-3xl text-secondary-text hover:text-primary-text transition duration-300 hover:scale-105">
            <MdSkipNext />
          </button>
          <button className="text-secondary-text hover:text-primary-text transition duration-300 hover:scale-105">
            <MdRepeat />
          </button>
        </div>
        <div className="flex justify-center gap-5 items-center w-[90%]">
          <div className="w-full md:w-1/2 flex items-center gap-2">
            <span className="text-xs text-secondary-text">00:00</span>
            {/* PLAYER SLIDER */}
            <div className="w-full bg-foreground-lighter h-1 rounded-full relative overflow-hidden">
              <div className="absolute left-0 w-1/2 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-secondary-text">00:00</span>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button className="text-2xl text-secondary-text hover:text-primary-text transition duration-300">
              <MdVolumeUp />
            </button>
            {/* VOLUME PROGRESS BAR */}
            <div className="w-[50px] bg-foreground-lighter h-1 rounded-full relative overflow-hidden">
              <div className="absolute left-0 w-1/2 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SECTION  */}
      <div className="hidden md:flex ">
        {/* VOLUME CONTROL */}
        <div className="flex items-center gap-2">
          <button className="text-2xl text-secondary-text hover:text-primary-text transition duration-300">
            <MdVolumeUp />
          </button>
          {/* VOLUME PROGRESS BAR */}
          <div className="w-[100px] bg-foreground-lighter h-1 rounded-full relative overflow-hidden">
            <div className="absolute left-0 w-1/2 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
