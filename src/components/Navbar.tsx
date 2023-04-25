import {
  BsChevronLeft,
  BsChevronRight,
  BsFillPersonFill,
  BsPerson,
} from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center sticky top-0 z-10 bg-black/50 backdrop-blur-xl p-4">
      <div className="space-x-3">
        <button className="bg-black/50 rounded-full p-2">
          <BsChevronLeft />
        </button>
        <button className="bg-black/50 rounded-full p-2">
          <BsChevronRight />
        </button>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <button className="border border-white/50 rounded-full py-1 w-28 font-bold">
          Upgrade
        </button>
        <button className=" bg-black rounded-full p-1 w-fit pr-2 font-bold flex items-center gap-2">
          <span className="bg-zinc-600 p-1 rounded-full">
            <BsPerson />
          </span>
          <span>username</span>
          <span>
            <GoTriangleDown />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
