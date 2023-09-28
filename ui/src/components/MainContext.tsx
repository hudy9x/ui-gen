"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IMainContext {
  layouts: string[];
  page: string;
  addLayout: (name: string) => void;
  removeLayout: (index: number) => void;
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
  return (
    <MainContext.Provider
      value={{
        layouts,
        page: "index",
        addLayout,
        removeLayout,
      }}
    >
      <main className="flex">{children}</main>;
    </MainContext.Provider>
  );
};
