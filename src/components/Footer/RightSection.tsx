import React from "react";
import { AiFillSound } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";
import { MdCastConnected } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { Bar } from "./ProgressBar";

type Props = {};

function RightSection(props: Props) {
  return (
    <div className="flex-grow flex-center justify-end gap-4 text-white/75 text-[14px]">
      <button>
        <TbMicrophone2 />
      </button>
      <button>
        <HiOutlineViewList />
      </button>
      <button>
        <MdCastConnected />
      </button>
      <div className="flex-center gap-3 w-full max-w-[120px]">
        <button>
          <AiFillSound />
        </button>
        <Bar progress={100} />
      </div>
    </div>
  );
}

export default RightSection;
