import React from "react";
import IPodClassic from "./components/IPodClassic";

function App() {
  const [audioSrc, setAudioSrc] = React.useState<string>();
  const [fileName, setFileName] = React.useState<string>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioSrc) {
      URL.revokeObjectURL(audioSrc);
    }
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioSrc(URL.createObjectURL(file));
    setFileName(file.name);
  };

  return (
    <div className="grid place-content-center gap-y-4 min-h-screen">
      <IPodClassic audioSrc={audioSrc} songName={fileName} />
      <label className="flex flex-col gap-y-4">
        <span>Select an audio file to play</span>
        <input type="file" onChange={onFileChange} />
      </label>
    </div>
  );
}

export default App;
