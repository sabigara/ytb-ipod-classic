import clsx from "clsx";
import React from "react";
import useRaf from "../hooks/useRaf";
import Clock from "./Clock";
import styles from "./SeekBar.module.scss";

type Props = {
  audioElm?: HTMLAudioElement;
  className?: string;
};

export default function SeekBar({ audioElm, className }: Props) {
  const [currentSecs, setCurrentSecs] = React.useState(0);
  const [durationSecs, setDurationSecs] = React.useState(0);

  useRaf(() => {
    if (!audioElm) return;
    setCurrentSecs(audioElm.currentTime);
  });

  React.useEffect(() => {
    if (!audioElm) return;
    audioElm.onloadedmetadata = () => {
      setDurationSecs(audioElm.duration);
    };
  }, [audioElm]);

  return (
    <div className={clsx("flex items-center gap-x-3", className)}>
      <Clock secs={currentSecs} />
      <progress
        value={currentSecs}
        max={durationSecs}
        className={styles.progress}
      />
      <Clock secs={durationSecs - currentSecs} isRest />
    </div>
  );
}
