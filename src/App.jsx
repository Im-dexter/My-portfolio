import { Dock, Navbar, Welcome} from "#components";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import {Finder, Resume, Safari, Terminal, Text, Image} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div className="desktop-scale">
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
      </main>
    </div>
  );
};

export default App
