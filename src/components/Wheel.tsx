import React from "react";
import Button from "./Button";
import { AiFillFastForward, AiFillFastBackward } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

type Props = {
  onClickPlay?: () => void;
  onClickFastForward?: () => void;
  onClickFastBackward?: () => void;
};

export default function Wheel({
  onClickPlay,
  onClickFastForward,
  onClickFastBackward,
}: Props) {
  return (
    <section className="h-[280px] w-[280px] bg-white rounded-full relative">
      <Button className="absolute top-1 left-1/2 -translate-x-1/2">MENU</Button>
      <Button
        className="absolute top-1/2 -translate-y-1/2 right-1"
        onClick={onClickFastForward}
      >
        <AiFillFastForward className="w-7 h-7" />
      </Button>
      <Button
        className="absolute top-1/2 -translate-y-1/2 left-1"
        onClick={onClickFastBackward}
      >
        <AiFillFastBackward className="w-7 h-7" />
      </Button>
      <Button
        className="absolute flex bottom-1 left-1/2 -translate-x-1/2"
        onClick={onClickPlay}
      >
        <BsFillPlayFill className="w-5 h-5" />
        <BsFillPauseFill className="w-5 h-5" />
      </Button>
      <div className="h-[100px] w-[100px] bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
    </section>
  );
}
