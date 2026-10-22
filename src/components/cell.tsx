import Switch from "react-switch";
import type { Dispatch, SetStateAction } from "react";

const logoAssets = import.meta.glob<string>("../assets/images/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

export type ExtensionData = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

type PROPS = {
  Logo: string;
  Name: string;
  Description: string;
  IsActive: boolean;
  setInitialData: Dispatch<SetStateAction<ExtensionData[]>>;
};

export default function Cell({
  Logo,
  Name,
  Description,
  IsActive,
  setInitialData,
}: PROPS) {
  const logoSrc = logoAssets[Logo] ?? Logo;

  return (
    <div className="data-cell flex flex-col items-center justify-center gap-2 bg-[var(--forground)] border border-[var(--cell-border)] p-4 m-2 rounded-2xl">
      <div className="flex flex-row gap-2">
        <img src={logoSrc} alt={Name} className="m-0 w-12 h-12" />

        <div className="m-0">
          <h3 className="text-[var(--text-color)] font-bold">{Name}</h3>
          <p className="text-[16px] text-[hsl(226,11%,37%)]">{Description}</p>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-between m-2">
        <button
          className="hover:bg-[var(--main-red)] hover:text-white border border-[hsl(0,0%,78%)] focus:border-[var(--main-red)] text-[var(--text-color)] text-xs p-1 px-2 rounded-2xl cursor-pointer"
          onClick={() =>
            setInitialData((data) =>
              data.filter((item) => {
                if (item.name !== Name) return item;
              }),
            )
          }
        >
          Remove
        </button>

        <Switch
          onColor="#c62b1b"
          height={17}
          width={36}
          handleDiameter={15}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={(checked) =>
            setInitialData((data) =>
              data.map((item) =>
                item.name === Name ? { ...item, isActive: checked } : item,
              ),
            )
          }
          checked={IsActive}
        />
      </div>
    </div>
  );
}
