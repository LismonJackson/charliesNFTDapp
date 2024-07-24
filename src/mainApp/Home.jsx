import Border from "../components/Border";
import Community from "../components/Community";
import Header from "../components/Header";
import Roadmap from "../components/Roadmap";
import Specs from "../components/Specs";
import Team from "../components/Team";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <div className=" text-white p-1 sm:p-4">
      <Header />
      <Border className="w-[97%] m-auto" />
      <main>
        <Welcome />
        <Border className="w-[94%] m-auto" />
        <Specs />
        <Border className="w-[94%] m-auto" />
        <Community />
        <Border className="w-[94%] m-auto" />
        <Roadmap />
        <Border className="w-[94%] m-auto" />
        <Team />
      </main>
    </div>
  );
}

export default Home;
