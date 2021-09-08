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
      <div className = "navItems" >
        <div>All Products</div>
        <div>Laptops</div>
        <div>Tablets</div>
        <div>Keyboards</div>
        <div>Mice</div>
        <div>Headphones</div>
      </div>
    </nav>
  );
};

export default ShopNav;
