import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return (
    <main className="col-span-2 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-screen max-h-full">
      <Navbar />
      <div className="p-2 md:p-8">{children}</div>
    </main>
  );
}

export default Main;
