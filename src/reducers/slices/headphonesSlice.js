import { createSlice } from "@reduxjs/toolkit";

const headphonesSlice = createSlice({
  name: "headphones",
  initialState: {
    Sennheiser: {
      id: "Sennheiser",
      name: "SENNHEISER Momentum 3 Wireless Noise Cancelling",
      price: "269.59",
      imgsrc: "/Assets/img/headphones/Sennheiser.jpg"
    },
    Bose700: {
      id: "Bose700",
      name: "Bose Noise Cancelling Headphones 700",
      price: "379.99",
      imgsrc: "/Assets/img/headphones/bose700.jpg"
    },
    SonyWH: {
      id: "SonyWH",
      name: "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling",
      price: "348.59",
      imgsrc: "/Assets/img/headphones/Sonywh.jpg"
    },
    BoseQC35: {
      id: "BoseQC35",
      name: "Bose QuietComfort 35 II Wireless Bluetooth Headphones",
      price: "169.00",
      imgsrc: "/Assets/img/headphones/boseqc.jpg"
    },
    PowerBeats: {
      id: "PowerBeats",
      name: "Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip",
      price: "199.09",
      imgsrc: "/Assets/img/headphones/powerbeats.jpg"
    },
    PanasonicErgo: {
      id: "PanasonicErgo",
      name: "Panasonic ErgoFit In-Ear Earbud Headphones",
      price: "8.99",
      imgsrc: "/Assets/img/headphones/panasonic.jpg"
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
  reducers: {
    test: (state) => state
  }
});

export default headphonesSlice.reducer