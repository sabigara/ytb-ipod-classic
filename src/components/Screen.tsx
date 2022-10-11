import React from "react";
import { IoShuffleOutline } from "react-icons/io5";
import Cover from "./Cover";
import SeekBar from "./SeekBar";

type Props = {
  audioElm?: HTMLAudioElement;
  songName?: string;
};

export default function Screen({ audioElm, songName }: Props) {
  return (
    <section className="w-full h-[300px] bg-black rounded-xl p-[9px]">
      <div className="bg-white h-full flex flex-col">
        <header className="h-7 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-400 flex items-center px-[7px]">
          <time className="text-[16.5px] font-bold text-gray-600 flex-1">
            12:50 PM
          </time>
          <div className="flex items-center gap-x-2">
            {/* Triangle */}
            <div className="border-solid border-l-blue-400 border-y-[8px] border-l-[15px] border-y-transparent" />
            {/* Battery */}
            <div className="w-8 h-4 flex items-center border-2 border-gray-400 rounded-sm overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-b from-green-100 via-green-200 to-green-500" />
              <div className="flex-1 h-full bg-gradient-to-b from-gray-500 via-gray-300 to-gray-200" />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-2 relative">
          <IoShuffleOutline className="w-6 h-6 ml-auto" />
          <div className="absolute left-[16px] top-[24px]">
            <Cover />
            <Cover
              style={{
                transform: "scale(-0.98, -1) translateX(6px) translateY(10px)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,8), rgba(0,0,0,0) 40%)",
              }}
            />
          </div>
          <div className="absolute left-[174px] top-[54px] flex flex-col gap-y-[2px]">
            <div className="text-xl font-bold">{songName ?? "Song Name"}</div>
            <div className="text-sm">Artist Name</div>
            <div className="text-md font-semibold">Album Name</div>
            <div className="text-sm font-semibold mt-3">128 of 4205</div>
          </div>
        </div>
        <SeekBar className="px-4 pb-3" audioElm={audioElm} />
      </div>
    </section>
  );
}
