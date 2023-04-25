import { useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import {
  BsRepeat,
  BsRepeat1,
  BsShuffle,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";
import ProgressBar from "./ProgressBar";

function MiddleSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <div className="mx-auto flex flex-col items-center space-y-2 flex-grow max-w-md">
      <div className="flex-center gap-6 text-xl">
        <button>
          <BsShuffle />
        </button>
        <button>
          <AiFillStepBackward />
        </button>
        <button
          onClick={handlePlay}
          className="w-7 h-7 bg-white rounded-full text-black flex-center"
        >
          {isPlaying ? <BsPlayFill /> : <BsPauseFill />}
        </button>
        <button>
          <AiFillStepForward />
        </button>
        <button>
          <BsRepeat />
          {/* <BsRepeat1 /> */}
        </button>
      </div>
      <ProgressBar duration={getMinute(3.5)} value={98.94} />
    </div>
  );
}

export default MiddleSection;

const getMinute = (minute: number) => minute * 60 * 1000;
