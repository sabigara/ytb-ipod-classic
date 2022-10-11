export function secsToMinsAndSecs(secs: number) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  return { minutes, seconds };
}
