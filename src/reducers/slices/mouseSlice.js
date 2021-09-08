import { createSlice } from "@reduxjs/toolkit";

const mouseSlice = createSlice({
  name: "mice",
  initialState: {
    seenda: {
      id: "seenda",
      name: "seenda Wireless Mouse, 2.4G Noiseless Mouse with USB Receiver",
      price: "9.99",
      imgsrc: "/Assets/img/mice/seenda.jpg",
    },
    RazerDeathAdder: {
      id: "RazerDeathAdder",
      name: "Razer DeathAdder Essential Gaming Mouse",
      price: "22.99",
      imgsrc: "/Assets/img/mice/razer.jpg",
    },
    Uiosmuph: {
      id: "Uiosmuph",
      name: "Uiosmuph G12 Slim Rechargeable Wireless Silent Mouse",
      price: "12.99",
      imgsrc: "/Assets/img/mice/uiosmuph.jpg",
    },
    AppleMagicMouse: {
      id: "AppleMagicMouse",
      name: "Apple Magic Mouse",
      price: "79.99",
      imgsrc: "/Assets/img/mice/AppleMagicMouse.jpg",
    },
    Anker: {
      id: "Anker",
      name: "Anker 2.4G Wireless Vertical Ergonomic Optical Mouse",
      price: "27.99",
      imgsrc: "/Assets/img/mice/anker.jpg",
    },
    allIds: [
      "seenda",
      "RazerDeathAdder",
      "Uiosmuph",
      "AppleMagicMouse",
      "Anker",
    ],
  },
  reducers: {
    test: (state) => state,
  },
});

export default mouseSlice.reducer;
