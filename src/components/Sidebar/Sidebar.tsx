import Banner from "./Banner";
import Link from "./Link";
import Menu from "./Menu";
import SidebarNavItem from "./SidebarNavItem";
import { AiOutlinePlus, AiFillHeart } from "react-icons/ai";

function Sidebar() {
  const userPlaylists = ["AIO", "TOP 50", "Instrumental", "Random"];

  return (
    <aside className="w-56 min-h-screen bg-black hidden md:flex">
      <nav className="w-full">
        <Wrapper>
          <Banner />
          <Menu />
          <ul className="pt-5">
            <SidebarNavItem label="Create Playlist">
              <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-[14px]">
                <AiOutlinePlus />
              </div>
            </SidebarNavItem>
            <SidebarNavItem label="Liked Songs">
              <div className="w-6 h-6 bg-[linear-gradient(135deg,#450af5,#c4efd9)] rounded text-white flex items-center justify-center text-[14px]">
                <AiFillHeart />
              </div>
            </SidebarNavItem>
            <div className="w-full h-[1px] bg-white/25 mt-4"></div>
          </ul>
          <ul className="text-white/50">
            {userPlaylists.map((playlist) => {
              return (
                <li className="my-2">
                  <Link key={playlist} title={playlist} />
                </li>
              );
            })}
          </ul>
        </Wrapper>
      </nav>
    </aside>
  );
}
export default Sidebar;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col sticky left-0 bottom-0 top-0 p-6 max-h-[calc(100vh-5.25rem)] overflow-auto">
      {children}
    </div>
  );
};
