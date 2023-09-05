import React from "react";
import logo from "../../assets/logo.png";
import icons from "../../utils/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const {
  AiOutlineHome,
  RiFileListLine,
  BiUser,
  LuShoppingBag,
  TiGift,
  BiLogOut,
  ImFilm,
  TbBrandTwilio,
} = icons;
export const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <AiOutlineHome size={30} />,
    to: "/",
    section: "",
  },
  {
    display: "Order",
    icon: <RiFileListLine size={30} />,
    to: "/order",
    section: "order",
  },
  {
    display: "Product",
    icon: <LuShoppingBag size={30} />,
    to: "/product",
    section: "product",
  },
  {
    display: "Film",
    icon: <ImFilm size={30} />,
    to: "/films",
    section: "customer",
  },
  {
    display: "Brand",
    icon: <TbBrandTwilio size={30} />,
    to: "/brands",
    section: "customer",
  },
  {
    display: "Customer",
    icon: <BiUser size={30} />,
    to: "/customer",
    section: "customer",
  },
];
const activeStyle =
  "sidebar__menu__item flex justify-center w-[52px] h-[52px] bg-white text-orange-500 rounded-lg";
const nonActiveStyle =
  "sidebar__menu__item flex justify-center w-[52px] h-[52px] bg-white bg-opacity-25 text-white rounded-lg";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="sidebar flex flex-col py-8 px-3 gap-[100px]">
        <div className="sidebar__logo flex w-full justify-center items-center ">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="sidebar__menu ">
          <div className="sidebar__menu__indicator flex flex-col gap-8 items-center">
            {sidebarNavItems.map((item, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                to={item.to}
                key={index}
              >
                <div className="sidebar__menu__item__icon  flex justify-center items-center ">
                  {item.icon}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <a
        href="/#"
        className="sidebar__footer flex gap-2 text-white p-2 border-t items-end"
      >
        <div className="sidebar__footer__icon justify-start ">
          <BiLogOut size={30} />
        </div>
        <div
          className="sidebar__footer__text font-semibold text-[20px]"
          onClick={handleLogOut}
        >
          Log out
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
