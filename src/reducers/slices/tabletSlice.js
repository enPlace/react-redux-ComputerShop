import { createSlice } from "@reduxjs/toolkit";

const tabletSlice = createSlice({
  name: "tablet",
  initialState: {
    Fire: {
      id: "Fire",
      name: "Fire HD 8",
      size: '8"',
      storage: "32 GB",
      price: "59.99",
      imgsrc: "/Assets/img/tablets/fire.jpg",
    },
    iPad: {
      id: "iPad",
      name: "Apple iPad Pro",
      size: '12.8"',
      price: "1199.00",
      storage: "256 GB",
      imgsrc: "/Assets/img/tablets/ipad.jpg",
    },
    Surface: {
      id: "Surface",
      imgsrc: "/Assets/img/tablets/surface.jpg",
      name: "Microsoft Surface Pro 7",
      size: '12.3"',
      processor: "Intel Core i5",
      ram: "8GB RAM",
      storage: "128GB SSD",
      price: "776.00",
    },
    Samsung: {
      id: "Samsung",
      imgsrc: "/Assets/img/tablets/samsung.jpg",
      name: "SAMSUNG Galaxy Tab S7",
      size: '11"',
      storage: "128GB SSD",
      price: "567.99"
    },
    Lenovo: {
      id: "Lenovo",
      imgsrc: "/Assets/img/tablets/lenovo.jpg",
      name: "Lenovo Smart Tab M10 Plus",
      size: '10.3"',
      ram: "4GB RAM",
      storage: "128GB SSD",
      price: "229.00"
    },
    allIds: ["Fire", "iPad", "Surface", "Samsung", "Lenovo"]
  },
  reducers: {
    test: (state) => state
  }
});

export default tabletSlice.reducer
