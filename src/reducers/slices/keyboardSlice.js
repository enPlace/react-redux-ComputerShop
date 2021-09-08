import { createSlice } from "@reduxjs/toolkit";

const keyboardSlice = createSlice({
  name: "keyboards",
  initialState: {
    CorsairK70: {
      id: "CorsairK70",
      name: "CORSAIR K70 RGB MK.2 RAPIDFIRE Low Profile",
      imgsrc: "/Assets/img/keyboards/CorsairK70.jpg",
      price: "59.99",
    },
    CorsairK100: {
      id: "CorsairK100",
      name: "Corsair K100 RGB Optical-Mechanical Gaming Keyboard",
      imgsrc: "/Assets/img/keyboards/CorsairK100.jpg",
      price: "59.99",
    },
    AppleKeyboard: {
      id: "AppleKeyboard",
      name: "Apple Magic Keyboard with Numeric Keypad (Wireless, Rechargable)",
      imgsrc: "/Assets/img/keyboards/AppleKeyboard.jpg",
      price: "229.05",
    },
    HPSlim: {
      id: "HPSlim",
      name: "HP USB Slim Business Keyboard",
      imgsrc: "/Assets/img/keyboards/HPSlim.jpg",
      price: "22.55",
    },
    MicrosoftSculpt: {
      id: "MicrosoftSculpt",
      name: "Microsoft Sculpt Ergonomic Keyboard for Business (5KV-00001 )",
      imgsrc: "/Assets/img/keyboards/MicrosoftSculpt.jpg",
      price: "60.33",
    },
    allIds: [
      "CorsairK70",
      "CorsairK100",
      "AppleKeyboard",
      "HPSlim",
      "MicrosoftSculpt",
    ],
  },
  reducers: {
    test: (state) => state,
  },
});

export default keyboardSlice.reducer;
