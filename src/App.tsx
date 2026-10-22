import { useState, useEffect } from "react";
import HeaderBar from "./components/headerBar";
import Cell, { type ExtensionData } from "./components/cell";
import Data from "../data.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

function App() {
  const [activeBtn, setActiveBtn] = useState("all");
  const [darkMode, setDarckMode] = useState(false)
  const [initialData, setInitialData] = useState<ExtensionData[]>(Data);

  const extensions =
    activeBtn === "all"
      ? initialData
      : initialData.filter((item) => item.isActive === (activeBtn === "active"));

  // theme use effect 
  useEffect(() => {

  if (darkMode) {document.documentElement.setAttribute('data-theme', 'dark')}
  else {document.documentElement.removeAttribute('data-theme')}

  }, [darkMode]);

  useGSAP(()=>{
    gsap.from(".data-cell", {
      scale: 0.1,
      opacity: 0.2,
      stagger: 0.3,
      ease: "circ.inOut",
      duration: 1,
    })
  })

  return (
    <div className="w-screen h-screen px-2 lg:px-30 overflow-x-hidden">
      <HeaderBar isDarck={darkMode} setTheme={setDarckMode} />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mt-10">
        <h1 className="text-[var(--text-color)] ml-3 text-2xl my-auto font-bold">Extensions List</h1>
        <div className="flex flex-row">
          <button
            className={`top-btn ${activeBtn === "all" ? "bg-[var(--main-red)] text-[var(--active-text)]" : "bg-[var(--forground)] text-[var(--text-color)]"}`}
            onClick={() => setActiveBtn("all")}
          >
            All
          </button>
          <button
            className={`top-btn ${activeBtn === "active" ? "bg-[var(--main-red)] text-[var(--active-text)]" : "bg-[var(--forground)] text-[var(--text-color)]"}`}
            onClick={() => setActiveBtn("active")}
          >
            Active
          </button>
          <button
            className={`top-btn ${activeBtn === "inactive" ? "bg-[var(--main-red)] text-[var(--active-text)]" : "bg-[var(--forground)] text-[var(--text-color)]"}`}
            onClick={() => setActiveBtn("inactive")}
          >
            InActive
          </button>
        </div>
      </div>

      {/* Grid components */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 -gap-4">
        {extensions.map((item) => (
          <Cell
            key={item.name}
            Logo={item.logo}
            Name={item.name}
            Description={item.description}
            IsActive={item.isActive}
            setInitialData={setInitialData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;