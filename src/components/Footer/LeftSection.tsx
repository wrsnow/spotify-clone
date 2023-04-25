import React from "react";
import { BsHeart } from "react-icons/bs";
import { CgInpicture } from "react-icons/cg";

type Props = {};

function LeftSection({}: Props) {
  return (
    <div className="flex-center justify-start h-full gap-3 text-[14px] flex-grow">
      <div className="flex-center gap-2">
        <div className="h-14 aspect-square">
          <img
            src="https://i.scdn.co/image/ab67616d0000485195998c6ca2c759356eee3c3b"
            alt="Bruno Major Album"
          />
        </div>
        <div className="flex flex-col">
          <span>Nothing</span>
          <span className="text-[11px] text-white/75">Bruno Major</span>
        </div>
      </div>
      <div className="flex-center gap-5 text-base">
        <BsHeart />
        <CgInpicture />
      </div>
    </div>
  );
}

export default LeftSection;
