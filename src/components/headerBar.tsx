import LogoIcon from "../assets/images/logo.svg?react";
import MoonIcon from "../assets/images/icon-moon.svg?react"
import SunIcon from "../assets/images/icon-sun.svg?react"

type PROP = {
  isDarck: boolean;
  setTheme: (value: boolean)=> void;
}
export default function HeaderBar({ isDarck, setTheme }:PROP) {
  return (
    <div
    className="flex flex-row items-start justify-between bg-[var(--forground)] overflow-hidden  rounded-2xl w-full h-15 p-2 mb-20 lg:mb-0 mt-10 lg:m-4"
    style={{boxShadow: "2px 2px 5px var(--bar-shadow)"}}
    >
      <LogoIcon 
      className="[&_>_path]:!fill-[var(--text-color)]"
      width={160} height={39} />

      <button
      className="focus:border border-[var(--main-red)] p-2 m-2 my-auto bg-[var(--theme-btn)] rounded-lg cursor-pointer"
      onClick={()=> setTheme(!isDarck)}
      >
        {
        !isDarck ? 
        (<MoonIcon width={19} height={19} />) :
         (<SunIcon width={19} height={19} />)
        }
      </button>
    </div>
  );
}
