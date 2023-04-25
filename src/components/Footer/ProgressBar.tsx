import React from "react";

type Props = {
  currentTime?: number;
  value: number;
  duration: number;
};

function ProgressBar(props: Props) {
  const progress: number = props.value > 100 ? 100 : props.value;
  const currentTime = props.duration * (progress / 100);
  const currentFormatted = transformIntoMinutes(currentTime);
  const totalDuration = transformIntoMinutes(props.duration);

  return (
    <div className="flex-center w-full gap-3 text-sm">
      <span>{currentFormatted || "0:00"}</span>
      <div className="w-full h-1 bg-white/50 flex items-start group rounded-full ">
        <Bar progress={progress} />
      </div>
      <span>{totalDuration || "0:00"}</span>
    </div>
  );
}

function getTimeFormat(time: string) {
  return time.replaceAll(".", ":");
}
function transformIntoMinutes(duration: number): string {
  const format = new Date(duration);
  const minutes = format.getMinutes();
  const seconds = format.getSeconds();
  return `${minutes}:${seconds <= 9 ? "0" + seconds : seconds}`;
}

export default ProgressBar;

export const Bar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-1 bg-white/50 flex flex-grow items-start group rounded-full ">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-white flex items-center justify-end relative duration-200"
      >
        <div className="w-2 h-2 rounded-full bg-white absolute right-0 group-hover:opacity-100 opacity-0"></div>
      </div>
    </div>
  );
};
