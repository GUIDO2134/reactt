import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <h1>Kingkell</h1>
      <div>
        <button>Hombres</button>
        <button>Mujeres</button>
        <button>Niños</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
