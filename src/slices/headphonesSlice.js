import { createSlice } from "@reduxjs/toolkit";

const headphonesSlice = createSlice({
  name: "headphones",
  initialState: {
    Sennheiser: {
      id: "Sennheiser",
      name: "SENNHEISER Momentum 3 Wireless Noise Cancelling",
      price: "269.59",
      img: ""
    },
    Bose700: {
      id: "Bose700",
      name: "Bose Noise Cancelling Headphones 700",
      price: "379.99",
      img: ""
    },
    SonyWH: {
      id: "SonyWH",
      name: "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling",
      price: "348.59",
      img: ""
    },
    BoseQC35: {
      id: "BoseQC35",
      name: "Bose QuietComfort 35 II Wireless Bluetooth Headphones",
      price: "169.00",
      img: ""
    },
    PowerBeats: {
      id: "PowerBeats",
      name: "Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip",
      price: "199.09",
      img: ""
    },
    PanasonicErgo: {
      id: "PanasonicErgo",
      name: "Panasonic ErgoFit In-Ear Earbud Headphones",
      price: "8.99",
      img: ""
    },
    allIds: [
      "Sennheiser",
      "Bose700",
      "SonyWH",
      "BoseQC35",
      "PowerBeats",
      "PanasonicErgo",
    ],
  },
});

export default headphonesSlice.reducer