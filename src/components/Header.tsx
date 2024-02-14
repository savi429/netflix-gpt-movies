import logo from "./../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <header className="z-10 p-6 bg-gradient-to-b from-black">
      <img src={logo} width="150" height="150" alt="logo" className="" />
    </header>
  );
};

export default Header;
