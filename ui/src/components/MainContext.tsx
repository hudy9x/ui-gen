"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IMainContext {
  layouts: string[];
  page: string;
  addLayout: (name: string) => void;
  removeLayout: (index: number) => void;
  swapLayout: (source: number, dest: number) => void;
}

const MainContext = createContext<IMainContext>({
  layouts: [],
  page: "",
  addLayout: () => {
    console.log(1);
  },
  removeLayout: () => {
    console.log(2);
  },
  swapLayout: () => {
    console.log(3);
  },
});

export const useMainContext = () => {
  const context = useContext(MainContext);
  return context;
};

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [layouts, setLayouts] = useState<string[]>([]);
  const addLayout = (layout: string) => {
    setLayouts((prev) => [...prev, layout]);
  };
  const removeLayout = (index: number) => {
    setLayouts((prev) => prev.filter((l, i) => (i === index ? false : true)));
  };
  const swapLayout = (source: number, dest: number) => {
    const clonedLayout = [...layouts];
    const temp = clonedLayout[source];
    clonedLayout[source] = clonedLayout[dest];
    clonedLayout[dest] = temp;

    setLayouts(clonedLayout);
  };

  return (
    <MainContext.Provider
      value={{
        layouts,
        page: "index",
        addLayout,
        removeLayout,
        swapLayout,
      }}
    >
      <main className="flex">{children}</main>;
    </MainContext.Provider>
  );
};
