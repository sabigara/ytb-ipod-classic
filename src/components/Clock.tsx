import { secsToMinsAndSecs } from "../libs/datetime";

type Props = {
  secs: number;
  isRest?: boolean;
};

export default function Clock({ secs, isRest }: Props) {
  const { minutes, seconds } = secsToMinsAndSecs(secs);
  return (
    <span className="flex items-center text-[15px] font-semibold tracking-wider">
      <span className="inline-flex justify-end w-[20px]">
        {isRest && "-"}
        {minutes}
      </span>
      <span className="inline-flex w-[6px]">:</span>
      <span className="inline-flex justify-start w-[20px]">
        {seconds.toString().padStart(2, "0")}
      </span>
    </span>
  );
}
