import createNumSlice from "./slices/createNumSlice";
import create from "zustand";

const UseStore = create((set, get) => ({
  ...createNumSlice(set, get),
}));

export default UseStore;
