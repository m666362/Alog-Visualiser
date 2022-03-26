import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";

setAutoFreeze(false);

export const immer = (config) => (set, get) =>
    config((fn) => set(produce(fn)), get);

const log = (config) => (set, get, api) =>
    config(
        (args) => {
            set(args);
        },
        get,
        api
    );

const store = (set) => ({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    setLabels: (labels) => set((state) => {
        state.labels = labels
    }),
    data: [12, 19, 14, 5, 2, 12],
    backgroundColors: [
        `rgba(255, 99, 132, 0.2)`,
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ],
    borderColors: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    ],
    setData: (data, backgroundColors, borderColors) => set((state) => {
        // console.log({array});
        state.data = [...data];
        state.labels = data;
        state.backgroundColors = [...backgroundColors];
        state.borderColors = [...borderColors];
    }),
    setSort: (array) => set((state) => {
        console.log({array});
        state.data = [...array];
        state.labels = [...array];
    }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;