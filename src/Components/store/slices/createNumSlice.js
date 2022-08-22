const createNumSlice = (set, get) => ({
  genNum: "Generate a number!",
  generator: (num) => {
    set({ genNum: Math.trunc(Math.random() * num) + 1 });
  },
});

export default createNumSlice;
