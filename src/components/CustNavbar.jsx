import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CustNavbar() {
  return (
    <Navbar rounded className="shadow-lg px-16 py-10">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">
          <Link to="/">
            CHALLENGE PT <span className="text-orange-500">NU</span>
            <span className="text-blue-900">TECH</span>
          </Link>
        </span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link active href="#" className="text-lg">
          <Link to="/data">
            <p>Manage Data</p>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
