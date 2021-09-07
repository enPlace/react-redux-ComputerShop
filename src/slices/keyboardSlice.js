import { createSlice } from "@reduxjs/toolkit";

const keyboardSlice = createSlice({
  name: "keyboards",
  initialState: {
    CorsairK70: {
      id: "CorsairK70",
      name: "CORSAIR K70 RGB MK.2 RAPIDFIRE Low Profile",
      img: "",
      price: "59.99",
    },
    CorsairK100: {
      id: "CorsairK100",
      name: "CORSAIR K70 RGB MK.2 RAPIDFIRE Low Profile",
      img: "",
      price: "59.99",
    },
    AppleKeyboard: {
      id: "AppleKeyboard",
      name: "Apple Magic Keyboard with Numeric Keypad (Wireless, Rechargable)",
      img: "",
      price: "229.05",
    },
    HPSlim: {
      id: "HPSlim",
      name: "HP USB Slim Business Keyboard",
      img: "",
      price: "22.55",
    },
    MicrosoftSculpt: {
      id: "MicrosoftSculpt",
      name: "Microsoft Sculpt Ergonomic Keyboard for Business (5KV-00001 )",
      img: "",
      price: "60.33",
    },
  },

  allIds: [
    "CorsairK70",
    "CorsairK100",
    "AppleKeyboard",
    "HPSlim",
    "MicrosoftSculpt",
  ],
});

export default keyboardSlice.reducer