import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ResultState {
  points: number;
  endGame: boolean;
  increasePoints: () => void;
  cleanState: () => void;
  finishGame: () => void;
  startGame: () => void;
}

const useResultsStore = create<ResultState>()(
  persist(
    (set) => ({
      points: 0,
      endGame: false,
      increasePoints: () => set((state) => ({ points: state.points + 1 })),
      cleanState: () => set((state) => ({ points: 0 })),
      finishGame: () => set((state) => ({ endGame: true })),
      startGame: () => set((state) => ({ endGame: false })),
    }),
    persist
  )
);
export default useResultsStore;
