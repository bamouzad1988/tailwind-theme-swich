import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./nav.scss";

function Nav() {
  return (
    <div className="nav flex flex-col md:flex-row  py-3  md:justify-between sm:items-center px-3">
      <ul className="text-custom-text text-xs flex flex-col sm:flex-row">
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 ">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs " />
          <span className="font-bold ">+060 (800) 801-582</span>
        </li>
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 border-l-custom-border border-l-0 sm:border-l">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs " />
          <span className="font-bold "> support@shophub.com</span>
        </li>
      </ul>
      <ul className="text-custom-text flex text-xs md:mt-1 flex-col sm:flex-row">
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 ">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs " />
          <span className="font-bold ">Store Location</span>
        </li>
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 border-l-custom-border border-l-0 sm:border-l">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs" />
          <Link
            className="hover:text-custom-main transition duration-300 ease-in-out"
            to="/"
          >
            Login
          </Link>
        </li>
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 border-l-custom-border border-l-0 sm:border-l">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs" />
          <Link
            className="hover:text-custom-main transition duration-300 ease-in-out"
            to="/"
          >
            My Account
          </Link>
        </li>
        <li className="px-3 border-b border-custom-border sm:border-b-0 py-4 sm:py-0 border-l-custom-border border-l-0 sm:border-l">
          <PowerSettingsNewIcon className="!w-4 !hidden sm:!inline-block text-custom-main mr-1 text-xs" />
          <Link
            className="hover:text-custom-main transition duration-300 ease-in-out"
            to="/"
          >
            Daily Deal
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
