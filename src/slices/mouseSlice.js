import { createSlice } from "@reduxjs/toolkit";

const mouseSlice = createSlice({
  name: "mice",
  initialState: {
    seenda: {
      id: "seenda",
      name: "seenda Wireless Mouse, 2.4G Noiseless Mouse with USB Receiver",
      price: "9.99",
      img: "",
    },
    RazerDeathAdder: {
      id: "RazerDeathAdder",
      name: "Razer DeathAdder Essential Gaming Mouse",
      price: "22.99",
      img: "",
    },
    Uiosmuph: {
      id: "Uiosmuph",
      name: "Uiosmuph G12 Slim Rechargeable Wireless Silent Mouse",
      price: "12.99",
      img: "",
    },
    AppleMagicMouse: {
      id: "AppleMagicMouse",
      name: "Apple Magic Mouse",
      price: "79.99",
      img: "",
    },
    Anker: {
      id: "Anker",
      name: "Anker 2.4G Wireless Vertical Ergonomic Optical Mouse",
      price: "27.99",
      img: "",
    },
  },

  allIds: ["seenda", "RazerDeathAdder", "Uiosmuph", "AppleMagicMouse", "Anker"],
});

export default mouseSlice.reducer