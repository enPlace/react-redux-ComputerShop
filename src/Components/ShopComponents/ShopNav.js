const ShopNav = () => {
  return (
    <nav
      style={{
        height: "100vh",
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ul style={{ marginTop: "100px"}}>
        <li>All Products</li>
        <li>Laptops</li>
        <li>Tablets</li>
        <li>Keyboards</li>
        <li>Mice</li>
        <li>Headphones</li>
      </ul>
    </nav>
  );
};

export default ShopNav;
