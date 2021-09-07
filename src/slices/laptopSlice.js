import { createSlice } from "@reduxjs/toolkit";

const laptopSlice = createSlice({
  name: "laptops",
  initialState: {
    ASUSZenBookProDuo: {
      id: "ASUSZenBookProDuo",
      name: "ASUS ZenBook Pro Duo UX581 Laptop",
      size: "15.6”",
      ram: "16GB RAM",
      processor: "Intel Core i7-10750H",
      storage: "1TB PCIe SSD",
      os: "Windows",
      type: "laptop",
      img: "",
      price: "2,299.99",
    },
    AppleMacBookPro: {
      id: "AppleMacBookPro",
      name: "2020 Apple MacBook Pro ",
      size: "13”",
      ram: "8GB RAM",
      processor: "Apple M1 Chip",
      storage: "256GB SSD",
      os: "Mac",
      type: "laptop",
      img: "",
      price: "1,299.99",
    },
    AppleMacBookAir: {
      id: "AppleMacBookAir",
      name: "2020 Apple MacBook Air ",
      size: "13”",
      ram: "8GB RAM",
      processor: "Apple M1 Chip",
      storage: "256GB SSD",
      os: "Mac",
      type: "laptop",
      img: "",
      price: "949.99",
    },
    LenovoIdeaPad: {
      id: "LenovoIdeaPad",
      name: "Lenovo IdeaPad 1 14  ",
      size: "14”",
      ram: "4GB DDR4 RAM",
      processor: "Intel Celeron N4020 Processor",
      storage: "64 GB SSD Storage",
      os: "Windows",
      type: "laptop",
      img: "",
      price: "255.99",
    },
    AcerAspire5: {
      id: "AcerAspire5",
      name: "Acer Aspire 5 Slim Laptop",
      size: "15.6”",
      ram: "4GB DDR4 RAM",
      processor: "AMD Ryzen 3 3200U",
      storage: "128GB SSD",
      os: "Windows",
      type: "laptop",
      img: "",
      price: "439.99",
    },
    HPChromebook: {
      id: "HPChromebook",
      name: "HP Chromebook x360 14a 2-in-1 Laptop",
      size: "14”",
      ram: "4GB RAM",
      processor: "Intel Pentium Silver N5000 Processor",
      storage: "64 GB eMMC",
      os: "Chrome OS",
      type: "laptop",
      img: "",
      price: "289.99",
    },
    LenovoChromebook: {
        id: "LenovoChromebook",
        name: "Lenovo Chromebook Flex 5 FHD Touch Display",
        size: "13”",
        ram: "4GB DDR4 RAM",
        processor: "Intel Core i3-10110U ",
        storage: "64 GB eMMC",
        os: "Chrome OS",
        type: "laptop",
        img: "",
        price: "429.99",
      },
    AcerNitro5: {
      id: "AcerNitro5",
      name: "Acer Nitro 5 AN515-55-53E5 Gaming Laptop",
      size: "15.6”",
      ram: "8GB DDR4 RAM",
      processor: "Intel Core i5-10300H",
      storage: "256GB NVMe SSD",
      os: "Windows",
      type: "laptop",
      img: "",
      price: "818.50",
    },
    allIds: ["ASUSZenBookProDuo", "AppleMacBookPro", "AppleMacBookAir", "LenovoChromebook", "AcerNitro5"]
  },
});

export default laptopSlice.reducer