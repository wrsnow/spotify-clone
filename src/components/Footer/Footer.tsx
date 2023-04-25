import { lazy, Suspense, memo } from "react";
// import MiddleSection from "./MiddleSection";
// import RightSection from "./RightSection";
// import LeftSection from "./LeftSection";

type Props = {};

function Footer() {
  /* LAZY COMPONENTS */
  const LeftSection = lazy(() => import("./LeftSection"));
  const MiddleSection = lazy(() => import("./MiddleSection"));
  const RightSection = lazy(() => import("./RightSection"));

  return (
    <footer className="w-full min-h-[5.25rem] col-span-full bg-zinc-900 border-t border-t-zinc-700 sticky bottom-0 flex">
      <FooterWrapper>
        <Suspense fallback="loading...">
          <LeftSection />
          <div className="hidden md:flex flex-grow">
            <MiddleSection />
          </div>
          <RightSection />
          <div className="flex flex-grow md:hidden w-full mt-4">
            <MiddleSection />
          </div>
        </Suspense>
      </FooterWrapper>
    </footer>
  );
}

export default memo(Footer);

const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between flex-grow p-4 md:flex-nowrap flex-wrap h-fit">
      {children}
    </div>
  );
};
