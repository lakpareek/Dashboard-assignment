import "../../App.css";

function Navbar() {
  return (
    <div className="bg-[#282828] h-[5vw] w-full flex items-center">
      <div className="ps-[6%]">
        <a href="#">
          <img
            className="w-[7vw] h-[2vw]"
            src="https://www.wijungle.com/images/WiJungle-Logo-White2.png"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
