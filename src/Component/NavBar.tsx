import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBell,
  faClockRotateLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "../assets/Images/Logoremovebg.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const items = [
    {
      key: "changePassword",
      label: "Change Password",
    },
    {
      key: "login",
      label: "Log In",
    },
    {
      key: "logout",
      label: "Log Out",
    },
  ];
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="bg-[#FEF6D6] px-4 pt-2 pb-2"
    >
      <NavbarBrand>
        <img src={Logo} alt="Logo" className="h-11" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="flex gap-3">
          <Link to={"/Home"}>
            <Button
              radius="full"
              className="flex items-center text-sm space-x-2 px-4 py-2 bg-slate-800 text-white shadow-md"
            >
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
              />
              Home
            </Button>
          </Link>
          <Link to={""}>
            <Button
              radius="full"
              className="flex items-center text-sm space-x-2 px-4 py-2 bg-slate-800 text-white shadow-md"
            >
              <FontAwesomeIcon
                icon={faBell}
                className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
              />
              Notification
            </Button>
          </Link>
          <Link to={"/RequestHistory"}>
            <Button
              radius="full"
              className="flex items-center text-sm space-x-2 px-4 py-2 bg-slate-800 text-white shadow-md"
            >
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="h-5 w-5 text-white group-hover:text-teal-500"
              />
              History
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly className="bg-slate-800" radius="full">
            <FontAwesomeIcon
              icon={faUser}
              className="h-5 w-5 text-white group-hover:text-teal-500"
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              color={item.key === "logout" ? "danger" : "default"}
              className={item.key === "logout" ? "text-danger" : ""}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default NavBar;
