import SidebarNavItem from "./SidebarNavItem";
import Home from "../../icons/Home";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";

function Menu() {
  return (
    <ul className="w-full flex flex-col">
      <SidebarNavItem isActive={true} label="Home">
        <Home stroke="white" fill="currentColor" />
      </SidebarNavItem>
      <SidebarNavItem label="Search">
        <FiSearch />
      </SidebarNavItem>
      <SidebarNavItem label="Your Library">
        <VscLibrary />
      </SidebarNavItem>
    </ul>
  );
}

export default Menu;
