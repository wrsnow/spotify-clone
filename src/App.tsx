// import Card from "./components/Card/Card";
// import CardWrapper from "./components/Card/CardWrapper";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { lazy, Suspense } from "react";
import top50global from "./data/top50global";
import spotify_data from "./data/spotify_data";

function App() {
  /* LAZY COMPONENTS */
  const Card = lazy(() => import("./components/Card/Card"));
  const CardWrapper = lazy(() => import("./components/Card/CardWrapper"));
  /*  */

  return (
    <div className="grid grid-cols-[14rem,auto,auto] text-white">
      <Sidebar />
      <Main>
        <Suspense fallback="loading...">
          {spotify_data.map((section) => {
            return (
              <CardWrapper sectionName={section.name} key={section.name}>
                {section.tracks.map((track) => {
                  return (
                    <Card
                      key={track.id}
                      description={track.description}
                      img={track.img}
                      title={track.title}
                    />
                  );
                })}
              </CardWrapper>
            );
          })}
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
