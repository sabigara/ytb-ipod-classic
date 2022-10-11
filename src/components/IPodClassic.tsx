import React, { ChangeEvent } from "react";
import Screen from "./Screen";
import Wheel from "./Wheel";

type Props = { audioSrc?: string; songName?: string };

export default function IPodClassic({ audioSrc, songName }: Props) {
  const [audioElm, setAudioElm] = React.useState<HTMLAudioElement | null>(null);

  const handleClickPlay = () => {
    if (!audioElm) return;
    if (audioElm.paused) {
      audioElm.play();
    } else {
      audioElm.pause();
    }
  };

  const handleClickFastForward = () => {
    if (!audioElm) return;
    audioElm.currentTime += 10;
  };

  const handleClickFastBackward = () => {
    if (!audioElm) return;
    audioElm.currentTime -= 10;
  };

  const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioElm) return;
    audioElm.volume = Number(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col w-[460px] h-[800px] bg-gray-300 rounded-[2rem] p-8">
        <Screen audioElm={audioElm ?? undefined} songName={songName} />
        <div className="flex-1 grid place-content-center">
          <Wheel
            onClickPlay={handleClickPlay}
            onClickFastForward={handleClickFastForward}
            onClickFastBackward={handleClickFastBackward}
          />
        </div>
      </div>
      <label className="flex items-center gap-x-4">
        <span>Volume</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          defaultValue={1}
          onChange={handleChangeVolume}
        />
      </label>
      {audioSrc && (
        <audio src={audioSrc} ref={setAudioElm} preload="metadata" />
      )}
    </div>
  );
}
