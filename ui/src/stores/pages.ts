import { create } from "zustand";
import { produce } from "immer";

interface IPageState {
  pages: string[];
}

export const usePageStore = create<IPageState>((set) => ({
  // points: [],
  // addAllPoints: (data: TaskPoint[]) =>
  //   set(
  //     produce((draftState: IPageState) => {
  //       draftState.points = data;
  //     })
  //   ),
}));
